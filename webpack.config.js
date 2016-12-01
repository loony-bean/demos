module.exports = {
    entry: {
      'pooh-chat': __dirname + "/apps/pooh-chat/index.js"
    },
    output: {
        path: __dirname + "/web/",
        filename: "[name]/index.js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/, 
                include: /node_modules/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.css$/, 
                exclude: /node_modules/,
                loader: 'style-loader!css-loader?modules&importLoaders=1!postcss-loader'
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                exclude: /node_modules/,
                loader: 'url'
            },
            {
                test: /\.json$/,
                exclude: /node_modules/,
                loader: 'file'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /whatwg-fetch/,
                loader: 'exports?fetch=fetch,Headers=Headers'
            }
        ],
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint'
            }
        ]
    },
    eslint: {
        configFile: __dirname + '/.eslintrc.json'
    },
    postcss: function () {
      return [
        require("postcss-import"),
        require('postcss-css-variables'),
        require('postcss-apply'),
        require('postcss-nested'),
        require('postcss-calc')
      ];
    }
};
