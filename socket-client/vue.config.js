module.exports = {
    devServer: {
        open: true,
        host: '192.168.0.112',
        port: 8080,
        https: false,
        hotOnly: false,
        //配置代理
        // proxy: {

        //     //以'/api'开头的接口会转接到下面的target的ip  http://192.168.2.23:8080
        //     '/api': {
        //         target: 'http://localhost:3000', // target host
        //         changeOrigin: true, // needed for virtual hosted sites
        //         ws: false, // proxy websockets
        //         pathRewrite: {
        //             //路径重写
        //             '^/api': '/api/', // rewrite path
        //         },
        //         logLevel: 'debug'
        //     },
        //     '/socket.io': {
        //         target: 'http://localhost:3000', // target host
        //         changeOrigin: true, // needed for virtual hosted sites
        //         logLevel: 'debug'
        //     }
        // }
    }
}