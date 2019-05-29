install:
	npm install
	-systemctl disable world_saving_attempt
	systemctl link $(CURDIR)/world_saving_attempt.service
	ln -sf $(CURDIR) /opt/poster
	systemctl enable world_saving_attempt
	systemctl restart world_saving_attempt
