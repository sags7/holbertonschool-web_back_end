export default function cleanSet(set, startString) {
  let returnStr = [];
  for (const value of set) {
    if (value.startsWith(startString)) {
      returnStr += value.slice(startString.length);
    }
  }
  return returnStr.join('-');
}
