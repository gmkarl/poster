#!/bin/sh

IP="$1"
if test "$IP" = ""
then
	IP="$(dig TXT +short o-o.myaddr.l.google.com @ns1.google.com | tr -d '"')"
	echo "$IP"

	while true
	do
		node_modules/.bin/sbot server #--host "$IP"
	done &

	if torify --version
	then
		torify "$0" "$IP"
		exit 0
	fi
fi

while true
do
	# you can do this, you rock!

	./index.js "$(ls message* | sort -R | tail -n 1)"

	# little under a month
	sleep $((60 * 60 * 24 * 27))

done
