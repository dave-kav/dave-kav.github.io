module.exports = {
  webpack: {
    configure: {
      resolve: {
        fallback: {
          "timers": require.resolve("timers-browserify"),
          "url": false,
          "buffer": false,
          "process": false
        }
      }
    }
  }
}; 