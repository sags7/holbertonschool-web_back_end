import fs from 'fs';

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const header = lines[0].split(',');
      const fieldIndex = header.indexOf('field');
      const firstNameIndex = header.indexOf('firstname');

      if (fieldIndex === -1 || firstNameIndex === -1) {
        reject(new Error('Incorrect CSV file'));
        return;
      }

      const result = {};

      for (let i = 1; i < lines.length; i++) {
        const columns = lines[i].split(',');

        if (columns.length < Math.max(fieldIndex, firstNameIndex) + 1) continue;

        const field = columns[fieldIndex].trim();
        const firstName = columns[firstNameIndex].trim();

        if (!result[field]) {
          result[field] = [];
        }

        result[field].push(firstName);
      }

      resolve(result);
    });
  });
}

export default readDatabase;
