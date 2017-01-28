test:
	echo 'Error: no test specified'

clean:
	rm -rf ./public

debug:
	./node_modules/.bin/webpack-dev-server  --host localhost --port 3000 --inline --content-base public/

build:
	./node_modules/.bin/webpack