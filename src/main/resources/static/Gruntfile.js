module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: {
            build: 'build/**',
            release: ['js/**', 'css/**']
        },

        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['src/**/*.js'],
                dest: 'build/<%= pkg.name %>.js'
            }
        },

        bower_concat: {
            options: {
                separator : ';\n'
            },
            all: {
                dest: {
                    'js': 'build/components.min.js',
                    'css': 'build/components.min.css'
                },
                mainFiles: {
                  'font-awesome': ['css/font-awesome.min.css'],
                  'Ionicons': ['css/ionicons.min.css'],
                  'AdminLTE': ['plugins/jQuery/jquery-2.2.3.min.js',
                               'plugins/slimScroll/jquery.slimscroll.min.js',
                               'plugins/fastclick/fastclick.min.js',
                               'bootstrap/js/bootstrap.min.js',
                               'dist/js/app.min.js',
                               'bootstrap/css/bootstrap.min.css',
                               'dist/css/AdminLTE.min.css',
                               'dist/css/skins/skin-blue.min.css']
                }
            }
        },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("dd-mm-yyyy") %> */\n',
                sourceMap: true
            },
            dist: {
                files: {
                    'build/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },

        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: 'build',
                        src: ['components.min.js', '<%= pkg.name %>.min.js', '<%= pkg.name %>.min.js.map'],
                        dest: 'js/',
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        cwd: 'build',
                        src: ['components.min.css'],
                        dest: 'css/',
                        filter: 'isFile'
                    }
                ]
            }
        },

        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            options: {
                globals: {
                    jQuery: true,
                    console: true,
                    module: true
                }
            }
        },

        qunit: {
            files: ['test/**/*.html']
        },

        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint', 'qunit']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-bower-concat');

    grunt.registerTask('test', ['jshint', 'qunit']);
    grunt.registerTask('build', ['clean', 'concat', 'uglify', 'bower_concat']);
    grunt.registerTask('release', ['copy']);
    grunt.registerTask('default', ['test', 'build', 'release']);
};
