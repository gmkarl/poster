install:
	npm install
	-systemctl disable world_saving_attempt
	systemctl link $(CURDIR)/world_saving_attempt.service
	if test -e /opt/poster; then rm /opt/poster; fi
	ln -s $(CURDIR) /opt/poster
	systemctl enable world_saving_attempt
	systemctl restart world_saving_attempt
