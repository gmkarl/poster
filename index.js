#!/usr/bin/env node
var fs = require('fs');
var arg = process.argv.slice(1);

// need a robot that posts to facebook

// - [X] 1. add message <==
// 	=> add more messages, to ensure important information included if present
// - [ ] 1b write csript to call on time interval
// 	- [X] open shell script new
// 	- [X] init loop and header
// 	- [ ] place call
// 		- [ ] add argument reading to nodejs app
// 	- [ ] fix bug
// - [ ] 
// - [ ] 1c merge git repo with standingwithresilience (make TI's smaller, call it people who are aware of mind control)?
// - [ ] 1d 
// - [ ] 2. run
// - [ ] 2. post in more channels
// - [ ] 3. check behavior

fs.readFile(arg, 'utf8', function(err, contents) {
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

