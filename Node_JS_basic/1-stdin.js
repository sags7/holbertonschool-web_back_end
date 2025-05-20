process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
  const input = data.toString();
  if (input.length > 0) {
    process.stdout.write(`Your name is: ${input}\r`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
