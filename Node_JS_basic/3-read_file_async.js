const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const rawLines = data.split('\n').filter((line) => line.trim() !== '');
      if (rawLines.length <= 1) {
        console.log('Number of students: 0');
        resolve();
        return;
      }

      const students = rawLines.slice(1).map((line) => line.split(','));
      console.log(`Number of students: ${students.length}`);

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
        if (Object.prototype.hasOwnProperty.call(fields, field)) {
          const names = fields[field];
          console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
        }
      }

      resolve();
    });
  });
}

module.exports = countStudents;
