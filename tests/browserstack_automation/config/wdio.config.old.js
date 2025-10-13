const { driver } = require('@wdio/globals');
const { readFileSync } = require('fs');
const browserStackConfig = require('./browserstack.config');
const browserCapabilities = require('../capabilities/browser_desktop.json');

let mobileBrowserCapabilities = [];
let cordovaCapabilities = [];

const cordovaSpecs = [
  '../specs/ReadyPageMobileAppIOS.js'
];

const mobileBrowserSpecs = [
  '../specs/ReadyPage.browser.js' // Assuming this is for mobile browser testing
];

const browserSpecs = [
  '../specs/ReadyPage.browser.js' // Add other browser-specific specs here
];

try {
  //const data = readFileSync('./tests/browserstack_automation/capabilities/mobile.json', { encoding: 'utf8' });
  const data = readFileSync('./tests/browserstack_automation/capabilities/browser_mobile_devices1.json', { encoding: 'utf8' });
 mobileBrowserCapabilities = JSON.parse(data);
} catch (error) {

  // Run `npm run wdio:setup`
}

try {
  //const data = readFileSync('./tests/browserstack_automation/capabilities/mobile.json', { encoding: 'utf8' });
  const data = readFileSync('./tests/browserstack_automation/capabilities/cordova_mobile_devices1.json', { encoding: 'utf8' });
 cordovaCapabilities = JSON.parse(data);
} catch (error) {

  // Run `npm run wdio:setup`
}

cordovaCapabilities.forEach(cap => {
  cap.specs = cordovaSpecs;
});

mobileBrowserCapabilities.forEach(cap => {
  cap.specs = mobileBrowserSpecs;
});

browserCapabilities.forEach(cap => {
  cap.specs = browserSpecs;
});

//const capabilities = [...cordovaCapabilities, ...browserCapabilities, ...mobileBrowserCapabilities];
//const capabilities = [...mobileBrowserCapabilities];
//const capabilities = [...browserCapabilities, ...mobileBrowserCapabilities];

// Use an environment variable to select the desired capability set
let selectedCapabilities = [];
switch (process.env.RUN_TYPE) {
  case 'cordova':
    selectedCapabilities = cordovaCapabilities;
    break;
  case 'browser-mobile':
    selectedCapabilities = mobileBrowserCapabilities;
    break;
  case 'browser-web':
    selectedCapabilities = browserCapabilities;
    break;
  case 'all':
  default:
    selectedCapabilities = [...cordovaCapabilities, ...browserCapabilities, ...mobileBrowserCapabilities];
    break;
}

const date = new Date();

const dateForDisplay = date.toDateString();

const buildName = `${browserStackConfig.NAME}: ${dateForDisplay}`;

// Apply common options and build name to all selected capabilities
selectedCapabilities.forEach((capability) => {
  const commonOptions = {
    buildName,
    debug: 'true',
    gpsLocation: '37.804363,-122.271111',
    maskCommands: 'setValues, getValues, setCookies, getCookies',
    video: 'true',
  };
  capability['bstack:options'] = {
    ...capability['bstack:options'],
    ...commonOptions,
  };
});

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
    /*'../specs/DiscussPage.browser.js',
    '../specs/FAQPage.browser.js',
    '../specs/PrivacyPage.browser.js',
    '../specs/ReadyPage.browser.js',
    '../specs/TermsPage.browser.js',
    '../specs/TopNavigation.browser.js',
    '../specs/TopicsPage.browser.js',
    '../specs/HowItWorks.browser.js',
    '../specs/FooterLinks.browser.js',
    '../specs/SignInPage.browser.js',
    '../specs/BallotPage.browser.js',
    '../specs/CandidatesPage.browser.js',
    '../specs/WhosRunningForOffice.browser.js',
    '../specs/ReadyPage.browser.js',
    '../specs/ReadyPageMobileBrowser.js',
    '../specs/WhosRunningForOfficeMobileBrowser.browser.js',
    '../specs/ReadyPageMobileAppAndroid.js',
    '../specs/ReadyPageMobileAppIOS.js',
    '../specs/WhosRunningForOfficeMobileBrowser.browser.js',*/
    //'../specs/ReadyPage.browser.js',

  ],

  capabilities : selectedCapabilities,//:[
    //{
      // "platformName": "Android",
      // "appium:platformVersion": "15.0",
      // "appium:deviceName": "sdk_gphone64_arm64",
      // //"appium:browserstack_automation_mobileapp": androidAppPath,
      // "browserName": "chrome",
      // "appium:chromedriverExecutable":"/usr/local/bin/chromedriver",
      // //"chromedriverExecutable": "/data/browserstack_automation_mobileapp/~~pv3zUj4sCDz7Y6G5q3nKyw==/com.android.chrome-GIebFYNy0CSmthG9nzSYKw==/base.apk",
      // "appium:automationName": "UIAutomator2",
    //},
    /*{
      "platformName" : "ios",
      "appium:platformVersion": "16",
      "appium:deviceName": "iPhone 14 Pro Max",
      "appium:browserstack_automation_mobileapp": "bs://154ae605f2d0a624354248e4c45a29e55a47bfcc",
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
      "appium:browserstack_automation_mobileapp" : "bs://fa870d3c3f9e21d5131705d3c09cc42936f37d38",
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
  // commonCapabilities: {
  //   'bstack:options': {
  //     buildName,
  //     debug: 'true',
  //     // geoLocation is only available under Enterprise plans
  //     // geoLocation: 'US-CA',
  //     // gpsLocation is only available under Paid plans
  //     // Oakland, CA, USA
  //     gpsLocation: '37.804363,-122.271111',
  //     maskCommands: 'setValues, getValues, setCookies, getCookies',
  //     video: 'true',
  //
  //   },
  // },
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



