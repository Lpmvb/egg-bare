<<<<<<< HEAD
"use strict";

const { app, assert } = require("egg-mock/bootstrap");

describe("test/app/controller/home.test.js", () => {
  it("should assert", function*() {
    const pkg = require("../../../package.json");
=======
'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/home.test.js', () => {
  it('should assert', function*() {
    const pkg = require('../../../package.json');
>>>>>>> update
    assert(app.config.keys.startsWith(pkg.name));

    // const ctx = app.mockContext({});
    // yield ctx.service.xx();
  });

<<<<<<< HEAD
  it("should GET /", () => {
    return app
      .httpRequest()
      .get("/")
      .expect("hi, egg")
=======
  it('should GET /', () => {
    return app
      .httpRequest()
      .get('/')
      .expect('hi, egg')
>>>>>>> update
      .expect(200);
  });
});
