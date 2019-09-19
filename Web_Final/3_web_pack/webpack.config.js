const path = require('path')
const ExtractTextPlugins =require('extract-text-webpack-plugin')
const ExtractSass = new ExtractTextPlugins({
    FILENAME: 'STYLE.CSS'
});

module.exports = {
    entry: './src/js/boostrap.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            },// fin de la regla de css
            {
                test: '/\.scss$/',
                loader: [

                ]
            } // Regla de Sass
        ]
    },
    plugins: [ExtractSass]
}