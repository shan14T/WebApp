const { driver } = require('@wdio/globals');
const { readFileSync } = require('fs');
const browserStackConfig = require('./browserstack.config');
const browserCapabilities = require('../capabilities/browser.json');

let mobileCapabilities = [];

try {
  const data = readFileSync('./tests/browserstack_automation/capabilities/mobile.json', { encoding: 'utf8' });
  mobileCapabilities = JSON.parse(data);
} catch (error) {

  // Run `npm run wdio:setup`
}

//const capabilities = [...browserCapabilities, ...mobileCapabilities];
const capabilities = [...mobileCapabilities];
//const capabilities = [...browserCapabilities];

const date = new Date();

const dateForDisplay = date.toDateString();

const buildName = `${browserStackConfig.NAME}: ${dateForDisplay}`;

// https://webdriver.io/docs/configurationfile

module.exports.config = {
  user: browserStackConfig.BROWSERSTACK_USER,
  key: browserStackConfig.BROWSERSTACK_KEY,
  injectGlobals: false,
  updateJob: true,
  reporters: [
    [
      'spec',
      {
        onlyFailures: true,
      },
    ],
  ],
  specs: [
    /*'../specs/DiscussPage.js',
    '../specs/FAQPage.js',
    '../specs/PrivacyPage.js',
    '../specs/ReadyPage.js',
    '../specs/TermsPage.js',
    '../specs/TopNavigation.js',
    '../specs/TopicsPage.js',
    '../specs/HowItWorks.js',
    '../specs/FooterLinks.js',
    '../specs/SignInPage.js',
    '../specs/BallotPage.js',
    '../specs/CandidatesPage.js',
    '../specs/WhosRunningForOffice.js',
    '../specs/ReadyPage.js', 
    '../specs/ReadyPageMobileBrowser.js',
    '../specs/WhosRunningForOfficeMobileBrowser.js',
    '../specs/ReadyPageMobileAppAndroid.js',
    '../specs/ReadyPageMobileAppIOS.js',
    '../specs/WhosRunningForOfficeMobileBrowser.js',*/
    '../specs/ReadyPageMobileAppIOS.js',

  ],

  capabilities,//:[
    //{
      // "platformName": "Android",
      // "appium:platformVersion": "15.0",
      // "appium:deviceName": "sdk_gphone64_arm64",
      // //"appium:app": androidAppPath,
      // "browserName": "chrome",
      // "appium:chromedriverExecutable":"/usr/local/bin/chromedriver",
      // //"chromedriverExecutable": "/data/app/~~pv3zUj4sCDz7Y6G5q3nKyw==/com.android.chrome-GIebFYNy0CSmthG9nzSYKw==/base.apk",
      // "appium:automationName": "UIAutomator2",
    //},
    /*{
      "platformName" : "ios",
      "appium:platformVersion": "16",
      "appium:deviceName": "iPhone 14 Pro Max",
      "appium:app": "bs://154ae605f2d0a624354248e4c45a29e55a47bfcc",
      "appium:automationName": "XCUITest",
      // 'bstack:options': {
      //   "userName": "shanthi_evUGuW",
      //   "accessKey": "7mpysxisX9Zvzs8oGZAi",
      //}
    },
    {
      "platformName" : "android",
      "appium:platformVersion" : "12.0",
      "appium:deviceName" : "Samsung Galaxy S22 Ultra",
      "appium:automationName" : "UIAutomator2",
      "appium:app" : "bs://fa870d3c3f9e21d5131705d3c09cc42936f37d38",
      //"appium:disableIdLocatorAutocompletion": true,
     
      'bstack:options' : {
      //   "userName" : "shanthi_evUGuW",
      //   "accessKey" : "7mpysxisX9Zvzs8oGZAi",
      //   "appiumVersion" : "1.17.0",
            "interactiveDebugging": true,
       }
    },
    {
      browserName: 'chrome',  // Mobile browser for Android
      'bstack:options': {
        deviceName: 'Samsung Galaxy S22',  // Device you want to use
        osVersion: '12.0',  // OS version of the device
        platformName: 'android',  // Mobile platform (Android)
        interactiveDebugging : 'true',
      },
    },
    {
      browserName: 'Safari',  // Mobile browser for Android
      'bstack:options': {
        deviceName: 'iPhone 14 Pro Max',  // Device you want to use
        osVersion: '16.0',  // OS version of the device
        platformName: 'ios',  // Mobile platform (Android)
        interactiveDebugging : 'true',
      },
    } */


    
  //],
  commonCapabilities: {
    'bstack:options': {
      buildName,
      debug: 'true',
      // geoLocation is only available under Enterprise plans
      // geoLocation: 'US-CA',
      // gpsLocation is only available under Paid plans
      // Oakland, CA, USA
      gpsLocation: '37.804363,-122.271111',
      maskCommands: 'setValues, getValues, setCookies, getCookies',
      video: 'true',
      
    },
  },
  maxInstances: 1,
  exclude: [],
  logLevel: 'error',
  coloredLogs: true,
  baseUrl: browserStackConfig.WEB_APP_ROOT_URL,
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 1,
  services: [['browserstack']],
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },
  // https://webdriver.io/docs/customcommands#examples
  before: function before () {
    driver.addCommand('findAndClick', async function findAndClick () {
      await this.waitForExist();
      await this.moveTo();
      await this.click();
    }, true);
  },
};

module.exports.config.capabilities.forEach((capability) => {
  const device = capability;
  const keys = Object.keys(device);
  keys.forEach((key) => {
    if (key in module.exports.config.commonCapabilities) {
      device[key] = {
        ...device[key],
        ...module.exports.config.commonCapabilities[key],
      };
    }
  });
});
