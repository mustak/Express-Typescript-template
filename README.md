# Express-Typescript-template
A Node, Express and Typescript template with Nunjucks view engine.

## Steps
1.	Run the express-generator in project directory:
	-	`npx express-generator --no-view`
1.	Update dependencies to the latest version:
	-	`npm i cookie-parser@latest debug@latest express@latest morgan@latest`
1.	Add nodemon
	-	`npm i -D nodemon`
1.	Add dev script with nodemon
	-	`"dev": "nodemon ./bin/www.js",`
1.	Add typescript dependencies:
	-	`npm i -D typescript ts-node`
1.	add http-errors dependency
	-	`npm i http-errors`
1.	Convert ./app.js to ./app.ts
1.	Convert ./bin/wwww to ./bin/www.ts
1.	Add nunjucks dependency
	-	`npm i nunjucks`
1.	Add typescript @type dependencies:
	-	@types/cookie-parser
	-	@types/debug
	-	@types/express
	-	@types/http-errors
	-	@types/morgan
	-	@types/node
	-	@types/nunjucks
	-	`npm i -D @types/cookie-parser @types/debug @types/express @types/http-errors @types/morgan @types/node @types/nunjucks`