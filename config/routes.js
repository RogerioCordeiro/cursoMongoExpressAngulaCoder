const express = require('express')

module.exports = function(server) {

    //Api Routes
    const router = express.Router()
    server.use('/api', router)

    //rotas da API
    const billingCycleService = require('../api/billingCycle/billingCycleService')
    billingCycleService.register(router, '/billingCycles') 
}