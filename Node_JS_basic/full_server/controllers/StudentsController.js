import readDatabase from '../utils';

const databaseFile = process.argv[2];

class StudentsController {
  static async getAllStudents(req, res) {
    await readDatabase(databaseFile)
      .then((studentsByField) => {
        let output = 'This is the list of our students';

        const sortedFields = Object.keys(studentsByField).sort((a, b) =>
          a.toLowerCase().localeCompare(b.toLowerCase())
        );

        for (const field of sortedFields) {
          const names = studentsByField[field];
          output += `\nNumber of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
        }

        res.status(200).send(output);
      })
      .catch((e) => {
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(databaseFile)
      .then((studentsByField) => {
        const studentList = studentsByField[major] || [];
        res.status(200).send(`List: ${studentList.join(', ')}`);
      })
      .catch((err) => {
        res.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
