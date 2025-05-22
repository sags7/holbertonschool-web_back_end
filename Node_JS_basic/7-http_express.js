const express = require('express');
const fs = require('fs');

const port = 1245;
const databaseFile = process.argv[2];
const app = express();

function countStudents(filepath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1).map((line) => line.split(','));
      const fields = {};

      for (const student of students) {
        const firstName = student[0];
        const field = student[3];

        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstName);
      }

      let output = `Number of students: ${students.length}`;
      for (const field in fields) {
        if (Object.prototype.hasOwnProperty.call(fields, field)) {
          const names = fields[field];
          output += `\nNumber of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
        }
      }

      resolve(output);
    });
  });
}

app.get('/students', (req, res) => {
  countStudents(databaseFile)
    .then((output) => {
      res.type('text/plain');
      res.send(`This is the list of our students\n${output}`);
    })
    .catch(() => {
      res.type('text/plain');
      res.send('This is the list of our students\nCannot load the database');
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
