export default function createInt8TypedArray(length, position, value) {
  const arr = new Int8Array(length);
  arr[position] = value;
  return arr;
}
