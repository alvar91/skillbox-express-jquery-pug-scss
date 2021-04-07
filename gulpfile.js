const gulp = require("gulp");
const gulpLoadPlugins = require("gulp-load-plugins");
const plugins = gulpLoadPlugins();
const webpackStream = require("webpack-stream");
const gulpUtil = require("gulp-util");
const gulpCleanCSS = require("gulp-clean-css");
const del = require("del");

const isDevelopment = gulpUtil.env.mode === "development" ? true : false;

const paths = {
  styles: {
    src: "assets/scss/styles.scss",
    dest: "src/static/",
    watch: "assets/scss/**/*.scss",
  },
  js: {
    src: "assets/js/main.js",
    dest: "src/static/",
    watch: "assets/js/**/*.js",
  },
  fonts: {
    src: "assets/fonts/*.*",
    dest: "src/static/fonts/",
  },
  jquery: {
    src: "assets/jquery/*.*",
    dest: "src/static/",
  },
  images: {
    src: "assets/images/*.*",
    dest: "src/static/images/",
    watch: "src/assets/images/*.{jpg,png,svg}",
  },
  blocksImages: {
    src: "assets/scss/**/*.{jpg,png,svg}",
    dest: "src/static/scss/",
    watch: "src/assets/scss/**/*.{jpg,png,svg}"
  },
};

gulp.task("clean", function () {
  return del("src/static");
});

gulp.task("scripts", function () {
  return gulp
    .src(paths.js.src)
    .pipe(
      webpackStream({
        output: {
          filename: "main.js",
        },
        module: {
          rules: [
            {
              test: /\.js$/,
              exclude: /(node_modules)/,
              use: [
                {
                  loader: "babel-loader",
                  options: {
                    presets: [
                      [
                        "@babel/preset-env",
                        {
                          targets: {
                            chrome: "58",
                            ie: "11",
                          },
                        },
                      ],
                    ],
                  },
                },
              ],
            },
          ],
        },
        mode: isDevelopment ? "development" : "production",
        devtool: isDevelopment ? "source-map" : "",
      })
    )
    .pipe(gulp.dest(paths.js.dest))
});

gulp.task("styles", function () {
  return gulp
    .src(paths.styles.src)
    .pipe(plugins.if(isDevelopment, plugins.sourcemaps.init()))
    .pipe(plugins.sass())
    .pipe(plugins.autoprefixer())
    .pipe(plugins.if(!isDevelopment, gulpCleanCSS()))
    .pipe(plugins.if(isDevelopment, plugins.sourcemaps.write()))
    .pipe(gulp.dest(paths.styles.dest))
});

gulp.task("fonts", function () {
  return gulp
    .src(paths.fonts.src)
    .pipe(gulp.dest(paths.fonts.dest))
});

gulp.task("jquery", function () {
  return gulp
    .src(paths.jquery.src)
    .pipe(gulp.dest(paths.jquery.dest))
});

gulp.task("images", function () {
  return gulp
    .src(paths.images.src)
    .pipe(plugins.if(!isDevelopment, plugins.imagemin()))
    .pipe(gulp.dest(paths.images.dest))
});

gulp.task("blocksImages", function () {
  return gulp
    .src(paths.blocksImages.src)
    .pipe(plugins.if(!isDevelopment, plugins.imagemin()))
    .pipe(gulp.dest(paths.blocksImages.dest))
});

gulp.task("watch", function () {
  gulp.watch(paths.styles.watch, gulp.series("styles"));
  gulp.watch(paths.js.watch, gulp.series("scripts"));
  gulp.watch(paths.images.watch, gulp.series("images"));
  gulp.watch(paths.blocksImages.watch, gulp.series("blocksImages"));
});

gulp.task(
  "build",
  gulp.series(
    "clean",
    gulp.parallel("fonts", "jquery","scripts", "styles", "images", "blocksImages")
  )
);
gulp.task("default", gulp.series("build", "watch"));
