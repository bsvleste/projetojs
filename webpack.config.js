module.exports = {
    entry: ['@babel/polyfill','./src/main.js'],
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:['babel-loader']                    
            }
        ]
    },
    resolve:{
        extensions:['*','.js','.jsx']
    },
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: __dirname + '/public'
    },
    
}
