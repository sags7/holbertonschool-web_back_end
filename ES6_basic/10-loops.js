export default function appendToEachArrayValue(array, appendString) {
  const newarray = [];
  for (const [idx, value] of array.entries()) {
    newarray[idx] = appendString + value;
  }
  return newarray;
}
