// Copyright 2012 Twitter, Inc
// http://www.apache.org/licenses/LICENSE-2.0

var TwitterCldr = require('../../../../lib/assets/javascripts/twitter_cldr/twitter_cldr.js');

describe("ShortDecimalFormatter", function() {
  beforeEach(function() {
    formatter = new TwitterCldr.ShortDecimalFormatter();
  });

  describe("#format", function() {
    it("formats a number as is if the pattern is not defined for the locale", function() {
      expect(formatter.format(7000)).toEqual("7000");
    });

    it("formats a number in terms of 'ten thousands' correctly", function() {
      expect(formatter.format(93000000)).toEqual("9300만");
    });
  });
});