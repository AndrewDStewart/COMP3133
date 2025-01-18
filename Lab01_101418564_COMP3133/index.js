// COMP 3133 Lab 1
// Author: Andrew Stewart, 101418564
const fs = require('fs');
const csv = require('csv-parser');
// File paths
const inputFile = 'input_countries.csv';
const canadaFile = 'canada.txt';
const usaFile = 'usa.txt';
// Delete existing files if they exist
[canadaFile, usaFile].forEach(file => {
  if (fs.existsSync(file)) {
    fs.unlinkSync(file);
    console.log(`${file} deleted.`);
  }
});
// Read and process CSV file
fs.createReadStream(inputFile)
  .pipe(csv())
  .on('data', (row) => {
    const { country } = row;
    if (country.toLowerCase() === 'canada') {
      fs.appendFileSync(canadaFile, `${Object.values(row).join(',')}\n`);
    } else if (country.toLowerCase() === 'united states') {
      fs.appendFileSync(usaFile, `${Object.values(row).join(',')}\n`);
    }
  })
  .on('end', () => {
    console.log('Processing completed.');
  });
