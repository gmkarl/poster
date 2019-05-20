#!/bin/sh

while true
do
	# little under a year <3
	sleep $((60 * 60 * 24 * 364))

	# you can do this, you rock!

	./index.js "$(ls message* | sort -R | tail -n 1)"
done
