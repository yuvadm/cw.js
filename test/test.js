var cw = require("..");

var assert = require("assert");

describe("cw", function () {
  describe("#tdit()", function () {
    it("should calculate the correct dit length in ms", function () {
      assert.equal(cw.tdit(20), 0.06);
      assert.equal(cw.tdit(50), 0.024);
    });
  });
  describe("#tfdit()", function () {
    it("should calculate the correct farnsworth dit length in ms", function () {
      assert.equal(cw.tfdit(20, 10), 0.21789473684210525);
      assert.equal(cw.tfdit(20, 20), 0.06);
      assert.equal(cw.tfdit(20), 0.06);
    });
  });
  describe("#codes", function () {
    it("should provide an object mapping characters to morse code", function () {
      assert.equal(cw.codes["C"], "-.-.");
      assert.equal(cw.codes["8"], "---..");
      assert.equal(cw.codes["."], ".-.-.-");
      assert.equal(cw.codes["w"], undefined);
    });
  });
});
