
## Configuration

1. Install `filestack-js` npm package as project dependency
  ```
  npm install --save filestack-js
  ```
  
2. Register + Configure your filestack account : https://www.filestack.com/ and obtain api key

3. Configure + export the filestack service in your project 
  - https://github.com/muktek-js-dipl-1803-ce/demo--filestack-upload-component-config/blob/master/src/services/filestackService.js
  - exported as `uploadFile` function

4. Import the filestack service in a component that needs to upload a file
  - https://github.com/muktek-js-dipl-1803-ce/demo--filestack-upload-component-config/blob/master/src/components/FileUploader--COMPLETE.js
  - imported `uploadFile` function. 
  - in this example, data sent to filestack is base64 image data from the browser's FileReader API
