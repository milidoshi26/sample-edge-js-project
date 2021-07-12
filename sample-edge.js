if (process.platform !== "win32") {
    process.env['EDGE_USE_CORECLR'] = 1;
}
console.log(process.env.PATH);
var edge = require('edge-js');

var helloWorld = edge.func(function () {/*
    async (input) => { 
        using System;
        Console.WriteLine("Trial succeeded");
        return ".NET Welcomes " + input.ToString(); 
    }
*/});

helloWorld('JavaScript', function (error, result) {
    if (error) throw error;
    console.log(result);
});
