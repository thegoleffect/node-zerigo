/*!
 * Node - Zerigo
 * Copyright(c) 2011 Van Nguyen <thegoleffect@gmail.com>
 * MIT Licensed
 */

/**
 * Module dependencies.
 */
var _ = require("underscore");
var ahr = require("ahr2");


/**
 * Setup form with the given `options`.
 *
 * Options:
 *
 *   - `api_key`        Airbrake App API Key
 *   - `verbose`        Console log status messages. Defaults to `false`
 *
 * Examples:
 *
 *      var Airbrake = require('connect-airbrake');
 *      var server = connect.createServer(
 *        Airbrake({ api_key: "" }),
 *      );
 *
 * @param {Object} options
 * @return {Function}
 * @api public
 */


module.exports = function(options) {
  if (options == null) {
    options = null;
  }
  this.init = function(options) {
    if (options == null) {
      options = null;
    }
    return options = _.extend({}, defaultOptions, options);
  };
  if (options != null) {
    return this.init(options);
  } else {
    return this;
  }
};