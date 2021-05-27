process.env['EDGE_USE_CORECLR'] = 1;

console.log(process.env.PATH);
var edge = require('edge-js');

var helloWorld = edge.func(function () {/*
    async (input) => { 
        return ".NET Welcomes " + input.ToString(); 
    }
*/});

helloWorld('JavaScript', function (error, result) {
    if (error) throw error;
    console.log(result);
});
