#!/usr/bin/env node
var fs = require('fs');

// need a robot that posts to facebook

// - [X] 1. add message <==
// 	=> add more messages, to ensure important information included if present
// - [ ] 1b write csript to call on time interval
// 	- [X] open shell script new
// 	- [X] init loop and header
// 	- [X] place call
// 		- [X] add argument reading to nodejs app
// 	- [ ] fix bug
// - [X] add arg
// okay sorry we are doing further steps of the, uh, pattern we are forced to follow to 'save the world'
// which unfortunately is needed.
// i do not yet have a way to share money with group collaboration to solve all the problems of the world
// as requested
// i know of this
//  it's okay, we can use bitcoin
//  and talk on riot or whatever
//  icechat
//  scuttlebutt
//  memo.cash
//  these are the networks we use it esems although there are many many more that have been censored
// - [ ] 1c merge git repo with standingwithresilience (make TI's smaller, call it people who are aware of mind control)?
// - [ ] 1d 
// - [ ] 2. run
// - [ ] 2. post in more channels
// - [ ] 3. check behavior

fs.readFile(process.argv[2], 'utf8', function(err, contents) {
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

