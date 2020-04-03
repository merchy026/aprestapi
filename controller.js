'use strict';

var respponse = require('./res');
var connection = require('./koneksi');

exports.index = function(req,res){
    respponse.ok("Aplikasi Rest Api ku berjalan")
};