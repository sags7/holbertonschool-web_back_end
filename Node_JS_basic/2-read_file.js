const fs = require('fs');

function countStudents(filepath) {
  try {
    const rawData = fs.readFileSync(filepath, 'utf8');
    const lines = rawData.split('\n').filter(line => line.trim() !== '');
    const students = lines.slice(1).map(line => line.split(','));

    const numberOfStudents = students.length;
    process.stdout.log(`Number of students: ${numberOfStudents}`);

    const fields = {};
    for (const student of students) {
      const firstName = student[0];
      const field = student[3];

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
    }

    for (const field in fields) {
      const names = fields[field];
      process.stdout.log(
        `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`
      );
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
