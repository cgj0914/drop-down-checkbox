module.exports = {
    chainWebpack:(config) =>{
        const imageRule = config.module.rule('images')
        // imageRule.uses.clear()
        imageRule.test(/.(png|jpe?g|gif)(\?\.*)?$/)
            .use('url-loader')
            .loader('url-loader')
            .tap(options => Object.assign({},options, {
                    limit: 1024,
                    name: 'img/[name].[hash:8].[ext]'
                })
            )
    }
}