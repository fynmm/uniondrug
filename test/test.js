var uniondrug = require('..');
var tape = require('tape');

tape('getParamsFromUrl', function (t) {
    t.plan(1);
    var params = uniondrug.getParamsFromUrl('https://www.baidu.com?a=1');
    console.log(params);
    t.deepEqual(params, {a: '1'});
});
