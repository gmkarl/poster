var fs = require('fs');

// we need to work, posting is likely an error
// (it'll be cleaned up by somebody in a different state of mind)
// delete the above when ready [plz say n future]


// - [ ] 1. add message <==
// - [ ] 2. run
// - [ ] 3. check behavior

fs.readFile('bitcoincash.key', 'utf8', function(err, contents) {
	require('datacash').send({
		data: ["0x6d02", "MESSAGE"],
		cash: { key: contents }
});

