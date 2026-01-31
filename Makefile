demo:
	hugo serve --themesDir=../.. --source=exampleSite

demo-network:
	hugo serve --themesDir=../.. --source=exampleSite --bind 0.0.0.0 --baseURL http://$$(ipconfig getifaddr en0):1313