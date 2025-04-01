export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) throw new Error('Cannot process');
  const newMap = new Map(map);
  map.forEach((qty, itm) => { if (qty === 1) map.set(itm, 100); });
  return newMap;
}
