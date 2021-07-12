if (process.platform !== "win32") {
    process.env['EDGE_USE_CORECLR'] = 1;
}
var {credscan} = require('credscan-pkg');

var mystring = 'Mongo Connection string mongodb://mongodb-example:erSNrY3Ucc3Q1v3JzDbfvRDiwj7n082WikBhX6C0VZa8lddDrqQN2yYiHpNoXhFLcsrOtmsK5bcVPriIWIt8KQ==@example-example.documents.azure.com:10255/store?ssl=true&sslverifycertificate=false&replicaSet=globaldb&connectTimeoutMS=300000&socketTimeoutMS=300000&retryWrites=true';

credscan(mystring);
