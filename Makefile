brain-games:
	node src/brain-games.js
	
install:
	npm ci

publish:
	npm publish --dry-run

make lint:
	npx eslint

brain-calc:
	node bin/brain-calc.js
