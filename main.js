require.config({
    baseUrl: "./",
    paths: {
        app: './main',
        bootstrapper: './app'
    }
});
require(['bootstrapper'], function (bootstrapper) {
});
