generate:
	@./scripts/generate-content.sh

demo: generate
	hugo serve --themesDir=../.. --source=exampleSite

demo-network: generate
	hugo serve --themesDir=../.. --source=exampleSite --bind 0.0.0.0 --baseURL http://$$(ipconfig getifaddr en0):1313

build: generate
	hugo --themesDir=../.. --source=exampleSite