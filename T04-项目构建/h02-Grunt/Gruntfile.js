module.exports = function (grunt) {
	// 初始化配置插件任务
	grunt.initConfig({
		// 加载外部JSON文件
		pkg: grunt.file.readJSON('package.json'),

		// 合并文件插件
		concat: {
			options: {
				// 拼接文件之间的分隔符
				separator: ';',
			},
			dist: {
				src: ['src/js/*.js'],
				dest: 'build/js/build.js',
			},
		},

		// 压缩文件插件
		uglify: {
			options: {
				// 压缩文件的头部注释, <%= %>模板语法
				banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
					'<%= grunt.template.today("yyyy-mm-dd") %> */'
			},
			build: {
				files: {
					'build/js/build.min.js': ['build/js/build.js']
				}
			}
		},

		// JS语法检查插件, 没有eslint强
		jshint: {
			options: {
				// 指定语法检查配置文件
				jshintrc: '.jshintrc',
			},
			// 需要检查的文件
			build: ['Gruntfile.js', 'src/js/*.js'],
		},

		// 合并压缩css文件
		cssmin: {
			options: {
				// 不快速压缩css文件, true容易出错
				shorthandCompacting: false,
				// 设置精度, 也是为了防止打包出错
				roundingPrecision: -1,
			},
			build: {
				files: {
					'build/css/build.min.css': ['src/css/*.css']
				}
			}
		},

		// 监控文件编码, 重新打包
		watch: {
			scripts: {
				files: ['src/js/*.js', 'src/css/*.css'],
				tasks: ['concat', 'jshint', 'uglify', 'cssmin'],
				options: {
					// true表示全量更新(js文件没有改变, 也会重新打包)
					spawn: false
				}
			}
		}
	});

	// 加载插件
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// 打印变量
	grunt.log.writeln(grunt.config.get('pkg'));

	// 注册默认任务  grunt执行任务  同步
	grunt.registerTask('default', ['concat', 'uglify', 'jshint', 'cssmin']);
	grunt.registerTask('mydev', ['default', 'watch']);

};