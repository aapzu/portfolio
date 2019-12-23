module.exports = {
    apps : [{
        name: "portfolio",
        script: "__sapper__/build",
        env: {
            NODE_ENV: "development",
        },
        env_production: {
            NODE_ENV: "production",
        }
    }]
}
