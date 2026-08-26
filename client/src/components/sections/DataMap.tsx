import { useMemo, useState } from 'react';

import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { CoverageDot } from '@/components/ui/CoverageDot';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { AfricaDataMap } from '@/components/visuals/AfricaDataMap';
import { DATA_DOMAINS } from '@/data/catalogue';
import { COUNTRIES, PILOT_COUNTRY_ID } from '@/data/countries';
import { product } from '@/data/site';
import type { CoverageLevel } from '@/types';
import styles from './DataMap.module.css';

const COUNTRIES_BY_ID = new Map(COUNTRIES.map((country) => [country.id, country]));
const SORTED_COUNTRIES = [...COUNTRIES].sort((a, b) => a.name.localeCompare(b.name));

/**
 * The product section: a working prototype of the Data Map.
 *
 * The map and the country list are two views of one selection, so the section
 * is usable with a pointer or a keyboard. Everything it displays is an
 * illustrative placeholder, and the panel says which country has actually been
 * looked at.
 */
export function DataMap() {
  const [selectedId, setSelectedId] = useState<string | null>(PILOT_COUNTRY_ID);

  const selected = selectedId ? COUNTRIES_BY_ID.get(selectedId) : undefined;

  const domainRows = useMemo(
    () =>
      DATA_DOMAINS.map((domain) => ({
        domain,
        level: (selected?.domains?.[domain.id] ?? 'unassessed') as CoverageLevel,
      })),
    [selected],
  );

  const hasInventory = Boolean(selected?.domains);

  return (
    <Section id="data-map" tone="dark" labelledBy="data-map-title" className={styles.section}>
      <div className="grid-backdrop" aria-hidden="true" />

      <Container size="wide" className={styles.container}>
        <header className={styles.head}>
          <Reveal>
            <Eyebrow>{product.eyebrow}</Eyebrow>
          </Reveal>

          <Reveal delay={80}>
            <h2 className={styles.title} id="data-map-title">
              {product.heading}
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <p className={styles.subheading}>{product.subheading}</p>
          </Reveal>

          <Reveal delay={180}>
            <p className={styles.description}>{product.description}</p>
          </Reveal>

          <Reveal delay={220}>
            <ol className={styles.drilldown} aria-label="Data Map hierarchy">
              {product.drilldown.map((level) => (
                <li key={level} className={styles.drilldownItem}>
                  {level}
                </li>
              ))}
            </ol>
          </Reveal>
        </header>

        <Reveal className={styles.console} delay={120}>
          <div className={styles.consoleBar}>
            <StatusBadge tone="building">{product.caption}</StatusBadge>
            <p className={styles.consoleNote}>{product.disclaimer}</p>
          </div>

          <div className={styles.workspace}>
            <div className={styles.mapPane}>
              <AfricaDataMap
                mode="explore"
                selectedId={selectedId}
                onSelect={setSelectedId}
                label="Interactive map of agricultural data coverage across Africa"
                description="African countries shown as binned regions shaded by illustrative data coverage. Selecting a region opens a summary of its agricultural data inventory."
              />
            </div>

            <div className={styles.panes}>
              <div className={styles.listPane}>
                <h3 className={styles.paneTitle}>Countries</h3>
                <ul className={styles.countryList}>
                  {SORTED_COUNTRIES.map((country) => (
                    <li key={country.id}>
                      <button
                        type="button"
                        className={styles.countryButton}
                        data-selected={selectedId === country.id ? 'true' : 'false'}
                        aria-pressed={selectedId === country.id}
                        onClick={() => setSelectedId(country.id)}
                      >
                        <CoverageDot level={country.coverage} />
                        <span className={styles.countryName}>{country.name}</span>
                        {country.provenance === 'in-progress' ? (
                          <span className={styles.pilotTag}>Pilot</span>
                        ) : null}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.detailPane}>
                {selected ? (
                  <>
                    <div className={styles.detailHead}>
                      <h3 className={styles.detailName}>{selected.name}</h3>
                      <StatusBadge tone={hasInventory ? 'research' : 'future'}>
                        {hasInventory ? 'Inventory in progress' : product.pendingLabel}
                      </StatusBadge>
                    </div>

                    <ul className={styles.domainList}>
                      {domainRows.map(({ domain, level }) => (
                        <li key={domain.id} className={styles.domainRow}>
                          <span className={styles.domainName}>{domain.name}</span>
                          {hasInventory ? (
                            <CoverageDot level={level} withLabel />
                          ) : (
                            <span className={styles.pending}>Coming soon</span>
                          )}
                        </li>
                      ))}
                    </ul>

                    {selected.note ? <p className={styles.detailNote}>{selected.note}</p> : null}
                  </>
                ) : (
                  <p className={styles.empty}>{product.emptyState}</p>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
