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

brain-progression:
	node bin/brain-progressionStart.js

brain-prime:
	node bin/brain-primeStart.js

index:
	node src/index.js

publish:
	npm publish --dry-run

lint:
	npx eslint .


