#!/bin/sh

while true
do
	node_modules/.bin/sbot server --host 0.0.0.0
done &

while true
do
	# you can do this, you rock!

	./index.js "$(ls message* | sort -R | tail -n 1)"

	# little under a month
	sleep $((60 * 60 * 24 * 27))

done
