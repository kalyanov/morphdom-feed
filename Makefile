test:
	echo 'Error: no test specified'

clean:
	rm -rf ./public

debug:
	./node_modules/.bin/webpack-dev-server --inline --content-base public/