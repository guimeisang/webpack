
        (function(modules){
            function require(fileName){
                const fn = modules[fileName];
                const module = { exports : {} };
                fn(require, module, module.exports);

                return module.exports;
            }

            require('../examples/src/index.js')
        })({NaN})
    