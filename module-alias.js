require('module-alias/register');
const moduleAlias = require('module-alias');

moduleAlias.addAlias('~', __dirname + '/src');
