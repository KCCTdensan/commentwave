export const filter = (keys: String[], map: Record<String, any>) =>
  keys.reduce((obj, key) => ({ ...obj, [key]: map[key] }), {})

export const tsDisp = (s: string) => {
  const date = new Date(s)
  const hh = ("00" + date.getHours()).slice(-2)
  const mm = ("00" + date.getMinutes()).slice(-2)
  return `${hh}:${mm}`
}
