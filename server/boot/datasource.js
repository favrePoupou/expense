'use strict';

var loopback = require('loopback');
var path = require('path');
var http = require('http');
var async = require('async');

module.exports = function (app) {
    app.models.Client.find({
        where:{
            userStatus: "Free"
        }
    }, function (err, data) {
        if (data.length > 0) {

        } else {
            app.models.Client.create({
                name: "- Non Assigné",
                userStatus: "Free",
                location: "",
                userId: ""
            }, function (err, result) {
                if (err) {
                    console.log('ERR', err);
                } else {
                   // console.log('Default CLient created', result);
                }
            })
        }
    })
   
}