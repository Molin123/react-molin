'use strict';

var gulp = require('gulp');

var assets = './output';

var minimist = require('minimist');

// 引入服务器配置文件
var deployConfig = require('./config/config.deploy.js');

var knownOptions = {
  	string: 'env',
  	default: { env: process.env.NODE_ENV || 'production' }
};

var options = minimist(process.argv.slice(2), knownOptions);

console.log('您将要部署的服务器是：', options.env);

var serverName = options.env;

var remoteServer = deployConfig[serverName];

gulp.task('deploy', function () {
    var sftp = require('gulp-sftp');
    return gulp.src(assets + '/**')
        .pipe(sftp(remoteServer))
})