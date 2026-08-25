const stamp = () => new Date().toISOString();

const write = (stream, level, message, meta) => {
  const line = `${stamp()} ${level} ${message}`;
  stream(meta ? `${line} ${JSON.stringify(meta)}` : line);
};

export const logger = {
  info: (message, meta) => write(console.log, 'INFO ', message, meta),
  warn: (message, meta) => write(console.warn, 'WARN ', message, meta),
  error: (message, meta) => write(console.error, 'ERROR', message, meta),
};
