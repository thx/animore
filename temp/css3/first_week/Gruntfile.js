/**
    * @description 部署配置
    * @author yuhao@taobao.com
 **/

var HOSTNAME = '0.0.0.0';
var LIVERELOAD_PORT = 9981;
var SERVER_PORT = 9980;

    // load all grunt tasks
module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    var jadeFiles = {};
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    hostname: HOSTNAME,
                    port: SERVER_PORT,
                    base: '.',
                    livereload: LIVERELOAD_PORT
                }
            }
        },
        watch: {
            less: {
                files: ['**/*.less', '!**/*.css'],
                tasks: ['less:watch']
            },
            tmpl: {
                files: ['**/*.tmpl']
            },
            options: {
                livereload: LIVERELOAD_PORT,
                spawn: true
            }
        },
        less: {
            options: {
                compress: true
            },
            watch: {
                files: [{
                    cwd: 'src/',
                    expand: true,
                    src: '**/*.less',
                    dest: 'src',
                    ext: '.less.css'
                }]
            }
        },
        open: {
            server: {
                path: 'http://<%= connect.server.options.hostname %>:<%= connect.server.options.port %>/'
            }
        }
    });

    grunt.registerTask('server', function (target) {
        if (target === 'build') {
            grunt.task.run([
                'build',
                'open',
                'connect:server'
            ]);
        }
        grunt.task.run([
            'open',
            'connect:server',
            'watch'
        ]);
    });
    //grunt.registerTask('pro', ['clean', 'jshint', 'jade', 'copy', 'cssmin', 'uglify', 'jsdoc']);
};
