import * as fs from 'fs';

class JSONHandler {
    readJSONFile(filepath) {
      const data = fs.readFileSync(filepath);
      return JSON.parse(data);
    }
  
    writeJSONFile(filepath, data) {
      const jsonStr = JSON.stringify(data, null, 2);
      fs.writeFileSync(filepath, jsonStr);
    }
  }

  export default JSONHandler;