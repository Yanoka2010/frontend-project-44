install:
	npm ci

braim-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run