'use strict';
/**
 * Bundles configuration within a single singleton object.
 * Uses `nconf` to support command line parameters, environment variables
 * and a `properties.json` file (in that order of prevalence).
 *
 * @module config
 */
const path = require('path');
const pck = require(path.join('..', '..', 'package'));
const nconf = require('nconf');

const DEFAULT_ENVIRONMENT = 'development';
process.env.NODE_ENV = process.env.NODE_ENV || DEFAULT_ENVIRONMENT;

nconf
  .argv()
  .env('_')
  .file({
    file: path.join(__dirname, 'properties.json')
  })
  .defaults({
    logger: {
      label: pck.name
    }
  })
  .overrides({
    environment: process.env.NODE_ENV,
    morgan: {
      options: {
        skip: () => process.env.NODE_ENV === 'test'
      }
    }
  });

module.exports = nconf;
