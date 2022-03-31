install:
	npm ci

brain-games:
	node bin/brain-games.js
	
brain-even:
	node bin/brain-evenStart.js

brain-calc:
	node bin/brain-calcStart.js

brain-gcd:
	node bin/brain-gcdStart.js

brain-pr:
	node bin/brain-progressionStart.js

publish:
	npm publish --dry-run

lint:
	npx eslint .


