let mix = require("laravel-mix");
mix
  .js("src/js/app.js", "dist/")
  .sass("src/sass/app.scss", "dist/")
  .options({
    processCssUrls: false
  });

mix.disableSuccessNotifications();
