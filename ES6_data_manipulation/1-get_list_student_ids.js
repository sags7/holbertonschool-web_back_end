export default function getListStudentIds(arrObj) {
  if (Array.isArray(arrObj) === false) { return []; }
  return arrObj.map((element) => element.id);
}
