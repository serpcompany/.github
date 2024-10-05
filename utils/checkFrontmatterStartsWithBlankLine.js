const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, 'src', 'content');

function getAllFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllFiles(file));
    } else {
      results.push(file);
    }
  });
  return results;
}

function checkBlankLineStart() {
  const files = getAllFiles(contentDir);
  const filesWithBlankStart = [];

  files.forEach((file) => {
    if (path.extname(file) === '.md') {
      const content = fs.readFileSync(file, 'utf8');
      const lines = content.split('\n');

      // Check if the first line is blank (empty or only whitespace)
      if (lines[0].trim() === '') {
        filesWithBlankStart.push(file);
      }
    }
  });

  if (filesWithBlankStart.length > 0) {
    console.log('Files starting with a blank line:');
    filesWithBlankStart.forEach((file) => console.log(file));
  } else {
    console.log('No files found starting with a blank line.');
  }
}

checkBlankLineStart();
