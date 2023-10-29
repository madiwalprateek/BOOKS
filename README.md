# BOOKS
A simple book api where you can add delete and update books through api call

Clone the repository into your local then run 
npm install

After then compile to typescript code by running
tsc

After then start the application by running app.ts using
node ./dist/app.js


Below are the CUrl to test the work case

GET  :   curl --location 'http://localhost:3000/api/books/653e5d794ec815fc4fb18dc9'

POST : curl --location 'http://localhost:3000/api/books' \
--header 'Content-Type: application/json' \
--data '{
    "title": "TEst title",
    "author": "prateek m",
    "summary": "just a test book"
}'



PUT : curl --location --request PUT 'http://localhost:3000/api/books/653e5d794ec815fc4fb18dc9' \
--header 'Content-Type: application/json' \
--data '{
    "title": "Updated Title",
    "author": "Updated Author",
    "summary": "Updated summary"
}'

DELETE : curl --location --request DELETE 'http://localhost:3000/api/books/653e5d794ec815fc4fb18dc9'
