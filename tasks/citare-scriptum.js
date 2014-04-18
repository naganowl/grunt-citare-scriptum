/*
 * grunt-citare-scriptum
 * https://github.com/naganowl/grunt-citare-scriptum
 *
 * Copyright (c) 2014 Alan Wong
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  var citareScriptum = require('citare-scriptum').CLI,
      _    = require('lodash');

  grunt.registerMultiTask('citare-scriptum', 'Generate documenation using citare-scriptum', function() {
    // Merge options
    var options = this.options(),
        files   = this.filesSrc,
        // Set task as async
        done    = this.async(),
        // Array of arguments to pass into citare-scriptum
        args    = [];

    // Add the files to the arguments
    args.push(files);
    // Loop through the options and add them to args
    _.each(options, function(value, key) {
      // Convert the key to a switch
      var sw = (key.length > 1 ? '--' : '-') + key;
      // Add the switch and its value
      // If the value is an array, add all array elements to the array.
      if(!_.isArray(value)) {
        value = [value];
      }

      _.each(value, function(value) {
        args.push([sw, value.toString()]);
      });
    });

    // Pass the args to citare-scriptum
    citareScriptum(_.flatten(args), function(error){
      if(error) {
        grunt.warn(error);
        process.exit(1);
        done(false);
        return;
      }
      done();
    });
  });
};
