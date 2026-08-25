import { useEffect, useRef } from 'react';

import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import styles from './HeroBackdrop.module.css';

/** Density is derived from area so the field feels the same on any screen. */
const NODES_PER_MEGAPIXEL = 42;
const NODE_RANGE = [34, 96];
const LINK_DISTANCE = 168;
const DRIFT = 0.04;

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

/**
 * Deterministic pseudo-random source. A fixed seed keeps the composition
 * stable between renders, so the backdrop never "re-shuffles" on resize.
 */
function createRandom(seed = 20260101) {
  let state = seed;
  return () => {
    state = (state * 1664525 + 1013904223) % 4294967296;
    return state / 4294967296;
  };
}

function createNodes(width, height) {
  const random = createRandom();
  const megapixels = (width * height) / 1_000_000;
  const count = Math.round(clamp(megapixels * NODES_PER_MEGAPIXEL, NODE_RANGE[0], NODE_RANGE[1]));

  return Array.from({ length: count }, (_, index) => ({
    x: random() * width,
    y: random() * height,
    vx: (random() - 0.5) * DRIFT,
    vy: (random() - 0.5) * DRIFT,
    radius: random() < 0.14 ? 2.1 : 1.1,
    // A small subset reads as active measurement points.
    signal: random() < 0.14,
    phase: random() * Math.PI * 2,
    index,
  }));
}

/**
 * A slow network of observation points — satellite passes, field sensors, and
 * the links between them. Rendered on canvas so hundreds of connections cost
 * one paint per frame instead of hundreds of DOM nodes.
 */
export function HeroBackdrop() {
  const canvasRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const context = canvas.getContext('2d');
    if (!context) return undefined;

    let nodes = [];
    let width = 0;
    let height = 0;
    let frame = 0;
    let elapsed = 0;
    let running = true;

    const resize = () => {
      const ratio = clamp(window.devicePixelRatio || 1, 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;

      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);

      nodes = createNodes(width, height);
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      // Links first, so nodes always sit on top of their own connections.
      context.lineWidth = 1;
      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.hypot(dx, dy);
          if (distance > LINK_DISTANCE) continue;

          const strength = 1 - distance / LINK_DISTANCE;
          context.strokeStyle = `rgba(127, 168, 148, ${(strength * 0.24).toFixed(3)})`;
          context.beginPath();
          context.moveTo(nodes[i].x, nodes[i].y);
          context.lineTo(nodes[j].x, nodes[j].y);
          context.stroke();
        }
      }

      nodes.forEach((node) => {
        const pulse = node.signal ? 0.55 + 0.45 * Math.sin(elapsed * 0.0016 + node.phase) : 1;

        context.beginPath();
        context.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        context.fillStyle = node.signal
          ? `rgba(200, 169, 106, ${(0.5 * pulse + 0.25).toFixed(3)})`
          : 'rgba(214, 229, 221, 0.42)';
        context.fill();

        if (node.signal) {
          context.beginPath();
          context.arc(node.x, node.y, node.radius + 5 * pulse, 0, Math.PI * 2);
          context.strokeStyle = `rgba(200, 169, 106, ${(0.16 * pulse).toFixed(3)})`;
          context.stroke();
        }
      });
    };

    const step = (timestamp) => {
      if (!running) return;

      elapsed = timestamp;
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        // Wrap rather than bounce: the field should feel continuous, not boxed.
        if (node.x < -20) node.x = width + 20;
        if (node.x > width + 20) node.x = -20;
        if (node.y < -20) node.y = height + 20;
        if (node.y > height + 20) node.y = -20;
      });

      draw();
      frame = window.requestAnimationFrame(step);
    };

    const start = () => {
      if (frame || prefersReducedMotion) return;
      running = true;
      frame = window.requestAnimationFrame(step);
    };

    const stop = () => {
      running = false;
      if (frame) window.cancelAnimationFrame(frame);
      frame = 0;
    };

    const onVisibilityChange = () => {
      if (document.hidden) stop();
      else start();
    };

    resize();
    draw();
    if (!prefersReducedMotion) start();

    const observer = new ResizeObserver(() => {
      resize();
      draw();
    });
    observer.observe(canvas);
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      stop();
      observer.disconnect();
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, [prefersReducedMotion]);

  return (
    <div className={styles.backdrop} aria-hidden="true">
      <div className={styles.field} />
      <div className={styles.glowPrimary} />
      <div className={styles.glowAccent} />
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.horizon} />
      <div className={styles.vignette} />
    </div>
  );
}
