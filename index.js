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
// 	- [X] fix bug
// - [X] add arg
//occasionally random phrases are spewed coming over the implant trying to take over the situation with stories
//and shit.  sorry for all the noise scattered everywhere, it's implant stories to control behavior.
// - [ ] 1c merge git repo with standingwithresilience (make TI's smaller, call it people who are aware of mind control)?
// - [ ] 1d 
// - [ ] 2. run
// - [ ] 2. post in more channels
// 	-> bitcoin instead of memo cash?? nahhh that's less important than facebook.
// 	-> just POST to facebook, and run the scuttlebutt pub !
// 	-> facebook
// - [ ] scuttlebutt pub
// 	- read instructions
// 		- find instructions tab
// 			-> google scuttlebutt pub again to find instructions for running scuttlebutt pub
// 		- switch to instructions tab
// 		- follow first instruction
// 	- run
// - [X] 3. check behavior
//
// SWITCHING to scuttlebutt pub.
// REASON: timeliness.  i was planning on porting from bitcoin cash to bitcoin.
// I think scuttlebutt pub is a better investment of time BECAUSE it helps evades censorship of communication which
// we do not have yet for collaboration.
// 	i'm on only one pub, so if it can't be reached I can't be reached.  

fs.readFile(process.argv[2], 'utf8', function(err, contents) {
	if (err) return console.log(err)
	console.log(contents)
	post(contents);
});

function post(msg) {
	fs.readFile('bitcoincash.key', 'utf8', function(err, contents) {
		if (err) return console.log(err)
		require('datacash').send({
			data: ["0x6d02", msg],
			cash: { key: contents }
		}, function(error, result) {
			if (error) {
				//console.log(error)
				return post(msg)
			}
			console.log(result)
			console.log('message sent')
		});
	});
}

