const fs = require('fs');
const path = require('path');

// Function to find files with specific extensions in a directory
const findFiles = (dir, ext) => {
  const files = fs.readdirSync(dir);
  const file = files.find(file => file.startsWith('main.') && file.endsWith(ext));
  console.log(`Found ${ext} file:`, file); // Debug log
  return file;
};

// Read the 404.html template
const html404Path = path.join(__dirname, '../build/404.html');
let html404Content = fs.readFileSync(html404Path, 'utf8');

// Find the main JS and CSS files
const jsFile = findFiles(path.join(__dirname, '../build/static/js'), '.js');
const cssFile = findFiles(path.join(__dirname, '../build/static/css'), '.css');

console.log('Current content:', html404Content); // Debug log

// Update the content with the correct filenames
html404Content = html404Content.replace(
  /<script defer="defer" src="\/static\/js\/main\..*?\.js"><\/script>/,
  `<script defer="defer" src="/static/js/${jsFile}"></script>`
);

html404Content = html404Content.replace(
  /<link href="\/static\/css\/main\..*?\.css" rel="stylesheet">/,
  `<link href="/static/css/${cssFile}" rel="stylesheet">`
);

console.log('Updated content:', html404Content); // Debug log

// Write the updated content back to 404.html
fs.writeFileSync(html404Path, html404Content);

console.log('404.html has been updated with correct asset paths');