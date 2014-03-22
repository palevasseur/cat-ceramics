// http://gruntjs.com/sample-gruntfile
// https://www.npmjs.org/package/grunt-protractor-runner

module.exports = function(grunt) {

grunt.initConfig({
  protractor: {
    options: {
      configFile: "node_modules/protractor/referenceConf.js", // Default config file
      keepAlive: true, // If false, the grunt process stops when the test fails.
      noColor: false, // If true, protractor will not use colors in its output.
      args: {
        // Arguments passed to the command
      }
    },
    your_target: {
      options: {
        configFile: "test/protractorConf.js", // Target-specific config file
        args: {} // Target-specific arguments
      }
    },
  },
  watch: {
	files: ['app/js/*.js','app/partials/*.html','test/**/*.js'],
	tasks: ['protractor']
  },
})

  // Load grunt watch
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  // Load grunt-protractor-runner
  grunt.loadNpmTasks('grunt-protractor-runner');

  // Default task(s).
  grunt.registerTask('default', ['protractor']);

};