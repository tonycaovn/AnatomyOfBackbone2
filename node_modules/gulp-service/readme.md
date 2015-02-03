# gulp-service
This plugin is using node's child processes to let you run individual services such as restful api-servers, thus, may be restarted according to your neeeds. Issues should be reported using [github's issues tracker](https://github.com/ivoputzer/gulp-service/issues).

## install
```bash
npm install gulp-service --save-dev
```

## example
```js
// gulpfile.js

var gulp = require('gulp')
  , service = require('gulp-service');

gulp.task('run:service', function(){
  service.run('app/index.js', {
    env: {
      port: 8080
    }
  });
});

gulp.task('watch', function(){
  gulp.watch(['app/**'], ['run:service']);
});
```

```js
// app/index.js

var express = require('express')
  , app = module.exports.app = exports.app = express();

app.get('/', function(req, res){
  res.send('service is up!');
})

app.listen(process.env.port);
```
