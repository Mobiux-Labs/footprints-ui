/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  module: {
    rules: [
      {
        test: /\.js$/, // Match JavaScript files
        exclude: /node_modules/, // Exclude external modules
        use: {
          loader: 'babel-loader', // Use Babel loader
          options: {
            presets: ['@babel/preset-env'] // Babel preset for environment
          }
        }
      }
    ]
  }
};

module.exports = nextConfig;
