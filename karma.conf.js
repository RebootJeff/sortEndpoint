module.exports = function (config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',
    frameworks: ['jasmine'],
    reporters: ['dots'],
    port: 9876,
    colors: true,
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,
    browsers: ['Chrome'],
    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,
    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
