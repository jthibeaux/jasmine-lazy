module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jasmine: {
      lazy: {
        src: 'src/lazy.js',
        options: {
          specs: 'spec/lazy_spec.js'
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  // Default task(s).
  grunt.registerTask('spec', ['jasmine']);
};
