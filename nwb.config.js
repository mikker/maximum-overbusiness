module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'MaximumOverbusiness',
      externals: {
        react: 'React'
      }
    }
  }
}
