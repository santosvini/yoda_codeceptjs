//require('custom-env').env();
// in codecept.conf.js
const { setCommonPlugins, setHeadlessWhen } = require("@codeceptjs/configure");

setCommonPlugins();
setHeadlessWhen(process.env.HEADLESS);

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: "./tests/*_tests.js",
  output: "./mochawesome-report",
  helpers: {
    WebDriver: {
      url: "https://yodapp-testing.vercel.app",
      browser: "chrome",
      //basicAuth: {username: 'username', password: 'password'},
      host: "127.0.0.1",
      port: 4444,
      restart: true,
      windowSize: "maximize",
      waitForTimeout: 15000,
      smartWait: 15000,
      desiredCapabilities: {
        chromeOptions: {
          args: ["--headless", "--disable-gpu", "--window-size=1366,768", "--no-sandbox"],
        },
      },
    },
    Mochawesome: {
      uniqueScreenshotNames: true,
    }
  },
  include: {
    I: "./steps_file.js",
    plugins: {
      wdio: {
        enabled: true,
        services: ["selenium-standalone"],
      },
      mocha: {
        reporterOptions: {
          reportDir: "./mochawesome-report",
          mochaFile: "result.xml",
        },
      },
    },
    name: "yoda_codeceptjs",
    translation: "pt-BR",
    bootstrap: null,
  },
};
