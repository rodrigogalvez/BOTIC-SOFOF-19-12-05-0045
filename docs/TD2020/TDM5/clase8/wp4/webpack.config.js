module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname+'/dist',
        filename: 'bundle.js'
    },
    module:  {
        rule: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                ues: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    }
}