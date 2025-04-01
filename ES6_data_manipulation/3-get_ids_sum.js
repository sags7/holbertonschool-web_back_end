export default function getStudentsIdsSum(listOfStudents) {
  const initialValue = 0;
  return listOfStudents.reduce(
    (accumulator, currentValue) => accumulator + currentValue.id,
    initialValue,
  );
}
