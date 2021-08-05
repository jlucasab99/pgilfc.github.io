build:
	sudo docker build -t afonsina/afonsina .

serve:
	sudo docker run -v ${PWD}:/app -v ${PWD}/vendor/bundle:/usr/local/bundle -p 4000:4000 -it --rm --name afonsina afonsina/afonsina