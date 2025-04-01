export default function updateUniqueItems(map) {
  const newMap = new Map(map);
  for (const [key, value] of newMap) {
    if (value === 1) newMap.set(key, 100);
  }
  return newMap;
}
