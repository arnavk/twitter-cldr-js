// Copyright 2012 Twitter, Inc
// http://www.apache.org/licenses/LICENSE-2.0

var TwitterCldr = require('../../../../lib/assets/javascripts/twitter_cldr/twitter_cldr.js');

describe("Character Range", function() {
	describe("#to_set", function() {
		it("should return a range between the initial and the final values", function() {
			range = new TwitterCldr.CharacterRange (
				new TwitterCldr.UnicodeString([97]),
				new TwitterCldr.UnicodeString([98])
			);

			expect (range.to_set().to_array(true)).toEqualRangeArray([new TwitterCldr.Range(97,98)]);
		});
	});
});
