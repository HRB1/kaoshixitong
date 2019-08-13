module.exports={
    configureWebpack:{
        devServer: {
            proxy:{
                "/api":{
                    target:"http://127.0.0.1:7001",
                    pathRewrite: {
                        '^/api':''
                    }
                }
            } 
        }
    }
}
