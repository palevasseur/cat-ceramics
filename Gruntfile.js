// http://gruntjs.com/sample-gruntfile
// https://www.npmjs.org/package/grunt-protractor-runner

module.exports = function(grunt) {
    // Load grunt tasks automatically (ex: node_modules/grunt-ts => will load the ts task)
    require('load-grunt-tasks')(grunt);
    grunt.loadTasks('tasks');

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
            }
        },
        watch: {
            files: ['app/js/*.js', 'app/partials/*.html', 'test/**/*.js'],
            tasks: ['protractor']
        },
        ts: {
            options: {                   // use to override the default options, http://gruntjs.com/configuring-tasks#options
                target: 'es5',           // 'es3' (default) | 'es5'
                module: 'commonjs',      // 'amd' (default) | 'commonjs'
                sourcemap: true,         // true  (default) | false
                declaration: false,      // true | false  (default)
                comments: true,          // true | false (default)
                fast: 'always'
            },
            dev: {
                src: ['app/**/*.ts', 'server/**/*.ts']
            }
        }
    })

  // Load grunt watch
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  // Load grunt-protractor-runner
  grunt.loadNpmTasks('grunt-protractor-runner');

  // Default task(s).
  grunt.registerTask('default', ['protractor']);

};