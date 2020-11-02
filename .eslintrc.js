module.exports = {
    extends : [
        "@tivac",
        "plugin:jest/recommended",
    ],

    parserOptions : {
        ecmaVersion : 8,
    },
    
    env : {
        node : true,
        jest : true,
        es6  : true,
    },

    plugins : [
        "jest",
    ],

    globals : {
        page     : true,
        browser  : true,
        document : true,
    },

    rules : {
        "max-statements" : [ "warn", 25 ],
    },
};
