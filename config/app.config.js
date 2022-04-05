const app = {
    default: {
        output: './build/staging',
        config: {
            _root: 'www.baidu.com',
        }
    },
    staging: {
        output: './build/staging',
        config: {
            _root: 'www.google.com',
        }
    },
    live: {
        output: './build/live',
        config: {
            _root: 'www.google.com',
        }
    }
};


function stringfy(conf) {
    let _conf = {};
    Object.keys(conf).forEach((key) => {
        _conf['process.' + key] = JSON.stringify(conf[key])
    });
    return _conf
}

module.exports = function (confName) {
    console.log(confName);
    if (app[confName]) {
        let conf = app[confName].config || {};
        return Object.assign({}, app[confName], {config: stringfy(conf)});
    } else {
        console.log(`Config name : ${confName} is not found in the app-config, it will run default config`);
        let conf = app.default.config || {};
        return Object.assign({}, app.default, {config: stringfy(conf)});
    }
};

