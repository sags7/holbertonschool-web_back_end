export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') { return ''; }
  const returnStr = [];
  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      returnStr.push(value.slice(startString.length));
    }
  }
  return returnStr.join('-');
}
