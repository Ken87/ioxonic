/**
 * Created by zhigang on 2017/7/11.
 */
var Mock = require('mockjs');

module.exports = {
    'test':{
        a:2,
        b:3
    },
    'demo':Mock.mock({
        'demo|1-10': [{
            'demo|+1': 1
        }]
    })
};