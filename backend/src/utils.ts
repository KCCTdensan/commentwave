export const filter = (keys: string[], map: Record<string, unknown>) =>
  keys.reduce((obj, key) => ({ ...obj, [key]: map[key] }), {})
