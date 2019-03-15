module.exports = (env, argv) => {
    if (argv.mode === 'development') {
        config.devtool = 'source-map';
      }
    
      if (argv.mode === 'production') {
        
      }
    
      return config;
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    }
  };