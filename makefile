install:
	npm install
	-systemctl disable world_saving_attempt
	-systemctl disable scuttlebutt_pub
	systemctl link $(CURDIR)/scuttlebutt_pub.service
	systemctl link $(CURDIR)/world_saving_attempt.service
	if test -e /opt/poster; then rm /opt/poster; fi
	ln -s $(CURDIR) /opt/poster
	systemctl daemon-reload
	systemctl enable scuttlebutt_pub
	systemctl restart scuttlebutt_pub
	systemctl enable world_saving_attempt
	systemctl restart world_saving_attempt
