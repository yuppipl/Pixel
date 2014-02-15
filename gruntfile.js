module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-connect');

  var pkgFile = grunt.file.readJSON('package.json');

  grunt.initConfig({
    pkg: pkgFile,
    connect: {
            test: {
                options: {
                    keepalive: true
                }
            }
        },
    amd_tamer: {
      options: {
        base: 'src/'
      },
      dist: {
        src: ['src/**/*.js'],
        dest: 'build/pixel.js'
      }
    },
    clean: ['build'],
    uglify: {
      production: {
        files: {
          'build/pixel.min.js': 'build/pixel.js'
        }
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', 'Default task', ['clean', 'amd_tamer', 'uglify']);

};
