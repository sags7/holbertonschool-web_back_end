const http = require('http');
const fs = require('fs');

const databaseFile = process.argv[2];

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

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    countStudents(databaseFile)
      .then((output) => {
        res.end(`This is the list of our students\n${output}`);
      })
      .catch((err) => {
        res.end('This is the list of our students\nCannot load the database');
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(1245);

module.exports = app;
