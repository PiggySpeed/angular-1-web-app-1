module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
      js: {
        src: ['app/controllers/webappController.js'],
        dest: 'build/scripts.js'
      }
    },
    less: {
      build: {
        src: ['app/styles/*.less'],
        dest: 'build/style.css'
      }
    },
    watch: {
      js: {
        files: ['app/**/*.js'],
        tasks: ['concat', 'less']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['concat', 'less', 'watch']);
};