const https = require('https');
const fs = require('fs');

function uploadLog(sessionId, username, accessKey, logFilePath) {
  return new Promise((resolve, reject) => {
    const logFileContent = fs.readFileSync(logFilePath, 'utf-8');

    // Check if the log file has content to upload
    if (!logFileContent) {
      console.log(`[BrowserStack Log Upload] The log file at ${logFilePath} is empty. Skipping upload.`);
      return resolve();
    }

    // Create the payload for the API request
    const postData = logFileContent;

    const options = {
      hostname: 'api.browserstack.com',
      path: `/automate/sessions/${sessionId}/logs`,
      method: 'PUT',
      auth: `${username}:${accessKey}`,
      headers: {
        'Content-Type': 'text/plain', // Use 'text/plain' or 'application/json' based on log content
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    // Make the API request to BrowserStack
    const req = https.request(options, (res) => {
      let responseBody = '';
      res.on('data', (chunk) => {
        responseBody += chunk;
      });
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          console.log(`[BrowserStack Log Upload] Successfully uploaded logs for session ${sessionId}`);
          resolve(JSON.parse(responseBody));
        } else {
          console.error(`[BrowserStack Log Upload] Failed to upload logs. Status: ${res.statusCode}, Body: ${responseBody}`);
          reject(new Error(responseBody));
        }
      });
    });

    req.on('error', (e) => {
      console.error(`[BrowserStack Log Upload] Request error: ${e.message}`);
      reject(e);
    });

    req.write(postData);
    req.end();
  });
}

module.exports = { uploadLog };

