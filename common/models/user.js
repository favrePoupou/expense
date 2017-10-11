'use strict';
var loopback = require('loopback');
var path = require('path');
var http = require("http");
var async = require('async');

module.exports = function (User) {

  // User.validatesLengthOf('password', {min: 8, message: {min: 'Password is too short'}});
  User.afterRemote('create', function (context, userInfo, next) {
    console.log('NEW USR ADDED: ', userInfo);

    if (userInfo.userStatus === "Admin") {
      var html = 'A new mail';
      var emailSubject = "Merci pour votre inscription";
      var templateFile = 'newUserAsAdmin' + '.ejs';
      var templatePath = path.resolve('', 'server/templates/' + templateFile);

      var template = loopback.template(templatePath);

      var emailOptions = {
        to: userInfo.email,
        from: 'noreply@cervolab.com',
        subject: emailSubject,
        html: html,
        contentStatus: userInfo.userStatus,
        userfirstName: userInfo.firstName,
        userlastName: userInfo.lastName
      };
      emailOptions.html = template(emailOptions);

      User.app.models.Email.send(emailOptions, function (err) {
        if (err) console.log('error sending email ' + emailSubject);
        else
          console.log('Sending email ' + emailSubject + ' to:', emailOptions.to);

        if (err) {
          console.log(err);
          return next(err);
        } else {
          return next();

        }
      });
    } else if (userInfo.userStatus === "Employee") {
      var html = 'A new mail';
      var emailSubject = "Validation de votre inscription";
      var templateFile = 'newUserAsEmployee' + '.ejs';
      var templatePath = path.resolve('', 'server/templates/' + templateFile);

      var template = loopback.template(templatePath);

      var emailOptions = {
        to: userInfo.email,
        from: 'noreply@cervolab.com',
        subject: emailSubject,
        html: html,
        contentStatus: userInfo.userStatus,
        userfirstName: userInfo.firstName,
        userlastName: userInfo.lastName,
        userSpeciality: userInfo.userSpeciality,
        userTitle: userInfo.userTitle,
        userPhone: userInfo.telephone,
        userPassword: userInfo.temp_password
      };
      emailOptions.html = template(emailOptions);

      User.app.models.Email.send(emailOptions, function (err) {
        if (err) console.log('error sending email ' + emailSubject);
        else
          console.log('Sending email ' + emailSubject + ' to:', emailOptions.to);

        if (err) {
          console.log(err);
          return next(err);
        } else {
          return next();

        }
      });
    }
  });

  User.on('resetPasswordRequest', function (userInfo) {
    var url = 'http://' + 'localhost:4200'; // We have to manage later the hostname_external & port_external from var_env    
    var url = url + '/reset-password' + '?access_token=' + userInfo.accessToken.id + '&email=' + userInfo.email;
    var html = 'Veuillez cliquer <a href="' + url + '"> ICI </a> pour renouveler votre mot de passe';

    User.app.models.Email.send({
      to: userInfo.email,
      from: 'noreply@cervolab.com',
      subject: 'CERVOExpense / Mot de passe oublié',
      html: html
    }, function (err) {
      if (err) {
        return console.log('> error sending password reset email');
      } else {
        console.log('> sending password reset email to:', userInfo.email);
        return {};
      }
    });
  });



};