export default function appendToEachArrayValue(array, appendString) {
  const newarray = [];
  let index = 0;
  for (const value of array) {
    newarray[index] = appendString + value;
    index += 1;
  }
  return newarray;
}
