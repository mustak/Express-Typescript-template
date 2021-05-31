# Express-Typescript-template
A Node, Express and Typescript template with Nunjucks view engine.

## Steps
1.	run the express-generator in project directory:
	-	`npx express-generator --no-view`
1.	update dependencies to the latest version:
	-	`npm i cookie-parser@latest debug@latest express@latest morgan@latest`
1.	add nodemon
	-	`npm i -D nodemon`
1.	add dev script
	-	`"dev": "nodemon ./bin/www.js",`
1.	add typescript dependencies:
	-	`npm i -D typescript ts-node`