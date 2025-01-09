# ONDC Token

A dictionary token package for the ONDC design system. This package contains various JSON files representing structured data for use within the ONDC design ecosystem.

## Features
- Provides JSON files for various aspects of the ONDC design system.
- Easy to integrate into projects.
- Well-structured and standardized data representation.

## Included Files
The package includes the following JSON files:

- **payment.json**: Payment-related configurations.
- **privacy.json**: Privacy-related data.
- **security.json**: Security-related configurations.
- **shop.json**: Shop-related data.
- **time.json**: Time-related information.
- **token.json**: Token definitions.
- **ui.json**: UI-specific configurations.

## Installation

To install the package, use npm:

```bash
npm install @ondc-ui/dictionary
```

## Usage

Import and use the JSON files in your project:

```javascript
// Import a specific JSON file
const tokenData = require('@ondc-ui/dictionary');

console.log(tokenData);
```

You can also access other JSON files similarly by specifying the file name.

## Development

This package is part of the ONDC design system workspace (`ondc-ui`). Contributions and improvements are welcome.

### Testing Locally
To test the package before publishing:

1. Run the following command to pack the module:
   ```bash
   npm pack
   ```
2. Verify the contents of the `.tgz` file.

## Author
Pratik Sharma  
[Email](mailto:sharma.pratik2016@gmail.com)  
[GitHub - @biomathcode](https://github.com/biomathcode)

## License

This package is licensed under the MIT License. See the LICENSE file for details.

