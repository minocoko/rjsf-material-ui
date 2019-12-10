const replace = require('rollup-plugin-replace');

// Not transpiled with TypeScript or Babel, so use plain Es6/Node.js!
module.exports = {
  // This function will run for each entry/format/env combination

  rollup(config, options) {
    config.plugins.push(
      replace({
        'react-jsonschema-form': '@minocoko/react-jsonschema-form',
      })
    );
    return config; // always return a config.
  },
};
