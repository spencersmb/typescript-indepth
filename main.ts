require.config({
  baseUrl: "./",
  paths: {
    app: './main',
    bootstrapper: './app'
  }
});

require(['bootstrapper'],
  (bootstrapper) => {

  });