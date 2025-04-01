export default function updateStudentGradeByCity(listOfStudents, city, newGrades) {
  const studentsByCity = listOfStudents.filter((studentInCity) => studentInCity.location === city);
  const updatedGradeStudents = studentsByCity.map((student) => {
    const newGradeObj = newGrades
      .find((studentWithNewGrade) => studentWithNewGrade.studentId === student.id);
    return {
      ...student, grade: newGradeObj ? newGradeObj.grade : 'N/A',
    };
  });
  return updatedGradeStudents;
}
