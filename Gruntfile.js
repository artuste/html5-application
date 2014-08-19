module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        wiredep: {
            target: {
                src: [
                    'index.html'
                ],
                cwd: '',
                dependencies: true,
                devDependencies: true,
                exclude: [],
                fileTypes: {},
                ignorePath: '',
                overrides: {}
            }
        },
        htmlhint: {
            angular_files: {
                options: {
                    //https://github.com/yaniswang/HTMLHint/wiki/Rules
                    'tag-pair': true
                },
                src: ['index.html',]
            }
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: true
                }
            },
            uses_defaults: ['assets/js/*.js']
        },
        less: {
            development: {
                files: {
                    "assets/css/main.css": "assets/css/main.less"
                }
            }
        },
        cssmin: {
            combine: {
                files: {
                    'assets/css/main.min.css': ['assets/css/*.css']
                }
            }
        },
        watch: {
            less: {
                files: ['assets/css/*.less'],
                tasks: ['less']
            },
            cssmin: {
                files: ['app/css/*.css'],
                tasks: ['cssmin']
            },
            scripts: {
                files: ['app/metronic/*.js'],
                tasks: ['jshint']
            },
            html: {
                files: ['app/tpl/*.html'],
                tasks: ['htmlhint']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-htmlhint');

    grunt.registerTask('hints', ['jshint', 'htmlhint']);
    grunt.registerTask('less-css', ['less', 'cssmin']);
    grunt.registerTask('default', ['less-css', 'wiredep']);
};