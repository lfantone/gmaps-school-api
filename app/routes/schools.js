'use strict';
/**
 * Implementation of API /schools endpoint.
 * @module schools
 */
const schools = require('config/schools');

/**
 * Set up /schools endpoint.
 * @param  {Object} router A Koa router
 */
module.exports = function(router) {
  /**
   * GET /schools
   *
   * Returns information about schools located
   * in Buenos Aires and their geolocation data.
   */
  router.get('/schools', (ctx) => {
    ctx.status = 200;
    ctx.body = {
      success: true,
      total: schools.length,
      data: schools
    };
  });
};
