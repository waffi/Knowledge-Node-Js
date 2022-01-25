# Knowledge-Node-Js

## References
- https://www.guru99.com/node-js-tutorial.html
- https://github.com/goldbergyoni/nodebestpractices

## Running your first Hello World application in Node.js

See example code [here](001-HelloWorld/Program.js)

### Executing the code

- In the command prompt, navigate to the folder where the file is stored. Enter the command "Node program.js"
- Start your internet browser, and type in the address: http://localhost:8080

## How to Create and Extend modules

See example code [here](002-Module/Program.js)

### What is a Module in Node.js?

Modules in Node js are a way of encapsulating code in a separate logical unit

### Executing the code

- In the command prompt, navigate to the folder where the file is stored. Enter the command "Node program.js"
- The output will be displayed to the console as well 

## How to publish modules

1. You need to tell your local npm installation on who you are
    + npm set init.author.name "name"
    + npm set init.author.email “email@gmail.com”
    + npm set init.author.url http://website.com
2. Create account at https://www.npmjs.com/ & Verify the email address
3. The next step is to login into npm using the credentials provided in the last step
    + npm login
4. The next step is to initialize the package to create the package.json file
    + npm init
5. The final bit is to publish your module into the npm registry
    + npm publish

## Handling GET Requests in Node.js

See example code [here](004-GetRequest/Program.js)

- We are using the ‘request’ module which was installed in the last step. This module has the necessary functions which can be used to make GET requests to websites.
- We are making a GET Request to www.google.com and subsequently calling a function when a response is received. When a response is received the parameters(error, response, and body) will have the following values
    - Error – In case there is any error received when using the GET request, it will be recorded here.
    - Response - The response will have the http headers which are sent back in the response.
    - Body - The body will contain the entire content of the response sent by Google.