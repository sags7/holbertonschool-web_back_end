export default function updateStudentGradeByCity(listOfStudents, city, newGrades) {
  const studentsByCity = listOfStudents.filter((student) => student.location === city);
  const updatedGradeStudents = studentsByCity.map((studentInCity) => {
    const newGradeObj = newGrades
      .find((studentWithNewGrade) => studentWithNewGrade.studentId === studentInCity.id);
    return {
      ...studentInCity, grade: newGradeObj || { grade: 'N/A' },
    };
  });
  return updatedGradeStudents;
}
