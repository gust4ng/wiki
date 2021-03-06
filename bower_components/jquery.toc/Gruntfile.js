module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        copy: {
            dist: {
                files: {
                    "docs/lib/jquery.toc/jquery.toc.js": "jquery.toc.js"
                }
            }
        },
        jshint: {
            files: ["gruntfile.js", "jquery.toc.js"],
            options: {
                globals: {
                    curly: true,
                    eqeqeq: true,
                    immed: true,
                    indent: 4,
                    latedef: true,
                    quotmark: "double",
                    undef: true,
                    trailing: true
                }
            }
        },
        uglify: {
            dist: {
                files: {
                    "docs/lib/jquery.toc/jquery.toc.min.js": ["jquery.toc.js"]
                }
            },
            options: {
                banner: "/*! Table of Contents jQuery Plugin - jquery.toc * Copyright 2013 Nikhil Dabas * http://www.apache.org/licenses/LICENSE-2.0 */\n"
            }
        },
        compress: {
            dist: {
                options: {
                    archive: "docs/assets/jquery.toc.zip"
                },
                files: [
                    {expand: true, cwd: "docs/lib/jquery.toc/", src: ["*"], dest: "jquery.toc/"}
                ]
            }
        },
        less: {
            docs: {
                options: {
                    yuicompress: true
                },
                files: {
                    "docs/css/docs.min.css": "docs/css/docs.less"
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-compress");
    grunt.loadNpmTasks('grunt-contrib-less');
    
    grunt.registerTask("default", ["copy", "jshint", "uglify", "compress", "less"]);

};
