/* global module: true */
module.exports = function (grunt) {
  grunt.initConfig({
    eslint: {
      options: {
        configFile: '.eslintrc.json'
      },
      target: ['*.js']
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      src: '*.css'
    },
    htmlhint: {
      options: {
        htmlhintrc: '.htmlhintrc'
      },
      src: '*.html'
    },
    mocha: {
      options:{
        run:true,
        reporter:'Spec'                        
      },
      test:{
        src:['test/index.html'],                
      }                              
    },
    htmlmin: {
      options: {
        collapseWhitespace: true,
        preserveLineBreaks: false                        
      },
      files: {
        src: './index.html',
        dest: 'dist/index.html'
      }
    },
    cssmin: {
      'dist/rectangle.css': 'rectangle.css'            
    },
    uglify: {
      release:{
        files: {
          'dist/rectangle.js': 'rectangle.js',
          'dist/calc.js': 'calc.js'
                                    
        }             
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-htmlhint');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-mocha');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['htmlhint', 'csslint', 'eslint']);
  grunt.registerTask('unitTest', ['mocha']);
  grunt.registerTask('default', ['htmlmin', 'cssmin', 'uglify']);
};
