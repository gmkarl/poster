#!/usr/bin/env node
var fs = require('fs');

// This code is messy because it is produced to handle a brain implant's group cognitive effects.
// The developer is, hence, incredibly confused by the situation's attempt to inhibit him out of fear of being discovered.

// we need to work, posting is likely an error
// (it'll be cleaned up by somebody in a different state of mind)
// delete the above when ready [plz say n future]


// - [ ] 1. add message <==
// - [ ] 2. run
// - [ ] 2. post in more channels
// - [ ] 3. check behavior

fs.readFile('message.1', 'utf8', function(err, contents) {
	post(contents);
});

function post(msg) {
	fs.readFile('bitcoincash.key', 'utf8', function(err, contents) {
		require('datacash').send({
			data: ["0x6d02", msg],
			cash: { key: contents }
		});
	});
}

