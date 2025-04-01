export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) { throw new Error('Position outside range'); }
  const arrBuffer = new ArrayBuffer(length);
  const bufferView = new DataView(arrBuffer);
  bufferView.setInt8(position, value);
  return bufferView;
}
