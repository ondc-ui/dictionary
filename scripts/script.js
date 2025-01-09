import fs from 'fs';



function convertToI18nFormat(data) {
  // Initialize the output structure
  const output = {};

  // Create language entries based on the keys in your data
  const languageKeys = [
    { key: 'en', source: 'latinEnglish' },
    { key: 'hi', source: 'devanagariHindi' },
    { key: 'gu', source: 'gujarati' },
    { key: 'ml', source: 'malayalam' },
    { key: 'ta', source: 'tamil' },
    { key: 'te', source: 'telugu' },
    { key: 'kn', source: 'kannada' },
    { key: 'pa', source: 'gurmukhiPunjabi' },
    { key: 'or', source: 'odia' },
    { key: 'bn', source: 'bangla' }
  ];

  // Initialize structure for each language
  languageKeys.forEach(({ key }) => {
    output[key] = {

    };
  });

  const keys = Object.keys(data)

  keys.forEach(key =>
    data[key].forEach(term => {
      languageKeys.forEach(({ key, source }) => {
        output[key][term.term.toLowerCase()] = term[source]
      })
    })
  )

  return output;
}

function saveToFile(data) {
  try {
    // Convert to pretty JSON string
    const jsonString = JSON.stringify(data, null, 2);

    // Write to file
    fs.writeFileSync('token.json', jsonString, 'utf8');
    console.log('Translations have been saved to Shop.json');
  } catch (err) {
    console.error('Error saving the file:', err);
  }
}

// Read the input file
function readInputFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading the input file:', err);
    return null;
  }
}

// Main execution
function main() {
  // Read input file or use provided data
  const inputData = readInputFile('token.json') || {
    "Privacy": [
      /* your data array */
    ]
  };

  // Convert the data
  const i18nFormat = convertToI18nFormat(inputData);

  // // Save to file
  saveToFile(i18nFormat);
}

// Run the script
main();