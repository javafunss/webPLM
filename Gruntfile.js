module.exports = function(grunt) {

  grunt.initConfig({
    jasmine: {
      components: {
        src: [
          'public/app/**/*js'
        ],
        options: {
          vendor: [
            'public/javascripts/sinon-1.12.2.js',
            'public/javascripts/angular.min.js',
            'public/javascripts/angular-ui-router.min.js',
            'public/javascripts/angular-ui-codemirror/ui-codemirror.js',
            'public/javascripts/angular-locker.min.js',
            'public/javascripts/angular-mocks.js'
          ],
          helpers: 'public/javascripts/jasmine/spec/SpecHelper.js'
        }
      }
    }
  });

  grunt.registerTask('build', 'Do build', function(arg) {
    grunt.log.write("I'm building...");
    grunt.log.ok();
  });

  grunt.registerTask('test', ['jasmine']);

  grunt.loadNpmTasks('grunt-contrib-jasmine');
};