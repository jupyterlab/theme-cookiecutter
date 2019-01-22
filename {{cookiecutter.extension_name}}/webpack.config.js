var path = require('path');
var version = require('./package.json').version;

/**
 * Custom webpack loaders are generally the same for all webpack bundles, hence
 * stored in a separate local variable.
 */
var loaders = [
  {
    test: /\.js$/,
    include: [path.join(__dirname, 'src')],
    loader: 'babel-loader',
    query: { presets: ['latest'] }
  },
  { test: /\.json$/, loader: 'json-loader' },
  { test: /\.css$/, loader: 'style-loader!css-loader' },
  { test: /\.html$/, loader: 'file-loader' },
  { test: /\.(jpg|png|gif)$/, loader: 'file-loader' },
  {
    test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url-loader?limit=10000&mimetype=application/font-woff'
  },
  {
    test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url-loader?limit=10000&mimetype=application/font-woff'
  },
  {
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
  },
  { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
  {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
  }
];

var base = {
  output: {
    libraryTarget: 'amd',
    devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]'
  },
  devtool: 'source-map',
  module: { loaders },
};

module.exports = [
  /**
   * Notebook extension
   *
   * This bundle only contains the part of the JavaScript that is run on
   * load of the notebook. This section generally only performs
   * some configuration for requirejs, and provides the legacy
   * "load_ipython_extension" function which is required for any notebook
   * extension.
   */
  Object.assign({}, base, {
    entry: path.join(__dirname, 'src', 'nb_extension.js'),
    output: Object.assign({}, base.output, {
      filename: 'extension.js',
      path: path.join(
        __dirname,
        '{{cookiecutter.extension_name}}',
        'nbextension'
      )
    }),
    externals: [
      'nbextensions/{{cookiecutter.extension_name}}/index',
      'base/js/namespace'
    ]
  }),
  /**
   * This bundle contains the implementation of the extension.
   *
   * It must be an amd module
   */
  Object.assign({}, base, {
    entry: path.join(__dirname, 'src', 'nb_index.js'),
    output: Object.assign({}, base.output, {
      filename: 'index.js',
      path: path.join(
        __dirname,
        '{{cookiecutter.extension_name}}',
        'nbextension'
      )
    })
  })
];
