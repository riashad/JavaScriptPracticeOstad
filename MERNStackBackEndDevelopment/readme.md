**MERN Stack Back ENd Development Learning** 
======
**Express Js REST API Development**
1. Introduction to REST API
2. REST API Best Practices
3. REST API Securities
4. Express REST API Essential Packages
5. Express REST API Structure
6. REST API File Management
7. Step by Step Rest API Development with MongoDB
8. REST API Documentation Preparation
9. Project Development - Practice

**_REST API / RESTFUL API: Representational State Transfer Application Programming Interface_**

**REST API Best Practices**
+ Best Practices of JSON
+ Request Response Model
+ Rest API Working flow
+ Rest API Auth & Security

**Best Practices of JSON(JavaScript Object Notation)** 
- lightweight data interchanging
- JSON internet media type: application/json (will be seen under Header section of console)
- File format: .json
- Human Readable data format
- We send data using Encryption and receives and decrypted to usable format
- Data gets transmitted to Server to Application / Application to Server
- **Characteristics:**
  - Easy to read and write
  - JSON is language independent
  - JSON should be lightweight and text based interchange format
  - For large JSON make it part by part
  
- **JSON Structure:**
  - Eas
  - ![Json Structure](https://www.w3resource.com/w3r_images/json-introduction.png)
  
- **JSON Best Practice:**
  - All code inside { } - bracket. Ex: {"name":"Riashad"}
  - All key:value pair need to be under double quote ""
  - Never use hyphens in Key Field, use CamelCase; Ex: FirstName
  - Use JSLint to solve bad special characters
  - Create JSON with Root Property: 
   ![JSON With Root Property](https://www.sqlshack.com/wp-content/uploads/2020/05/json_query-function-for-json-data.png)
- **Request Response Model**
  - HTTP Client is used for generate Request and receive Response
  - Axios: JavaScript - (Mobile / Web / Desktop)  - Application Level Client 
  - cURL: PHP - (Web)  - Application Level Client  
- **POSTMAN Http Client**
  - Test Request & Response
  - Generate API Documentation
- **HTTP Throttle Request**
  - Limiting user to hit to a application (how many times user can hit a application)
  - Why use this?
    - Security
    - Protection against DOS Attack
    - Controlling API request 

- --------
**REST API Best Practice**
- --------
- **API End Point Naming Best Practice**
1. [x] Name can't be like any CRUD functions. Ex: getUser, getId etc.
2. [x] Name must be like, Ex: /users/{id} -- here user can be any one and id can be any
3. [x] Must use "Noun" as name, avoid "verb"
4. [x] Hierarchy can be presented as ex: /blog/date/{id}
5. [x] Multiple user resources: /users/{id},{id}
6. [x] Query Parameter: /users?location=USA
7. [x] Use lowercase and hyphens for long query params, ex: /user/{id}/pending-orders-online
8. [x] No file extension, ex; __/user/{id}/read-document__ instead of ❌ /user/{id}/read-document
9. [x] Do not add ending slash / at the end of the url ex: /users/{id}/pending-orders

- **API Response Best Practice**
1. [x] Provide proper http response code.
2. [x] Provide proper content type / file type (if any).
3. [x] Provide cache status (if any).
4. [x] Authentication token should be provided via response header (if any).
5. [x] Only string data is allowed for response header (if any).
6. [x] Provide content length (if any).
7. [x] Provide response data and time (if any).
8. [x] Follow request and response model.
- **API Request Handling Best Practice**
1. [x] When use GET(): 
   1. [x] For sending less amount of data.
   2. [x] When nothing should change on the server side because of your action
   3. [x] Data retrieval using query param 
   4. [x] Get method only use request url and header
2. [x] When use POST():
    1. [x] Post method need to be used when server state changes due to some action.
    2. [x] When request needs it's body to send/pass large amount of data.
    3. [x] When upload data like document, image, video from Client to Server;
3. [x] Request Body:
   1. [x] Body should be structured in JSON Array / Object Pattern.
   2. [x] Body should contain multipart/ form-data like image, audio, video, etc.
   3. [x] Don't hold AUTH information
4. [x] Request Header: 
   1. [x] Security Token and Auth related info;
   2. [x] Data should be send as **key:value** pair;
5. [x] Controller Best Practice:
   1. [x] Should be Clear and No Business logic can be placed
   2. [x] Will be responsible for accepting HTTP request
   3. [x] Follow "SOLID" principles to manage controller classes.
   4. [x] Mention which function is responsible for GET() and POST() request.
   5. [x] Responsible for calling models, return response & redirect to actions.
6. [x] Middleware Best Practice:
   1. [x] Special type of Controller/Class/Function/Code Segment
   2. [x] Request ---> Middleware ---> Response
   3. [x] No business logic will be here.
   4. [x] Middleware uses:
      1. [x] Use to implement API Key, user agent redirection, CSRF, XSRF security, token based API Auths
      2. [x] Use to implement API request rate limiting
      3. [x] Logging income HTTP requests
      4. [x] Redirect after a Request and send response to redirected segment
      5. [x] Middleware can reject/modify/decorate a request
      6. [x] Create/Modify Security structure
   5. [x] REST API Security Best Practice
      1. [x] Varies from application to application
      2. [x] Varies developer to developer
      3. [x] Varies environment to environment 
      4. [x] Varies use case to use case
      5. [x] Must follow Security Layers
         1. [x] API Key Verification
         2. [x] User Agent Verification
         3. [x] CSRF Protection
         4. [x] Rate Limiting
         5. [x] HTTP Secure Headers
         6. [x] Parameter Pollution
         7. [x] Data Sanitization
         8. [x] Authentication / Authorization 
      6. [x] Must know security placements
   6. [x] User Agent Protection:
      1. [x] Where is the Rest API being called?
      2. [x] Allow and Disallow using User Agent
      3. [x] We can restrict Rest Api from SEO Indexing
      4. [x] Disallow / Reject if the visitor hides identity
   7. [x] API KEY:
      1. [x] Best way for Auth / Authorization
   8. [x] Bearer Auth / Auth 2.0:
      1. [x] JSON Web Token (JWT) is used for Authentication purpose.
      2. [x] Library: jsonwebtoken - NPM 
   9. [x] JWT(JSON Web Token or Bearer Web Token):
      1. [x] Encrypt and Decrypt Information as JSON Object while Transferring data.
      2. [x] World wide trusted and authorized way;
      3. [x] USE Case:
         1. Authorization
         2. Information Exchange
      4. [x] JWT Structure:
         1. Header: type of token, signing algo
         2. Payload: information want to transmit are inside payload; creation time, expire time, for whom, etc.
         3. Signature: header, payload everything became encrypted using base64URLEncode + 256 bit secret becomes 1 encoded String;
   10. [x] Express REST API - Package:
       1. [x] Express: the core backbone
       2. [x] Body Parser: Middleware for Node.js
       3. [x] Cookie Parser: Need for parsing Cookies
       4. [x] Multer: Node.js Middleware for handling multipart/form-data
       5. [x] Jsonwebtoken
       6. [x] MySql Driver
       7. [x] Mongo DB Driver
       8. [x] DotEnv: globally managing environment variables (zero dependency module)
       9. [x] Cors: CORS is a node.js module for providing connect/express
       10. [x] Express Mongo Sanitize
       11. [x] Express Rate Limit: rate limiting middleware
       12. [x] Helmet: request/response security settings manager
       13. [x] HPP: http parameter pollution protection middleware
       14. [x] Validator: sting validation
       15. [x] Xss-clean: sanitize Post Body, URL params, GET queries
   11. [x] Express REST API - File Folder Structure:
       1. [x] Client Application / Script -->
       2. [x] Routing End Point -->
       3. [x] Controller --> <--- Model
       4. [x] Controller --> <--- Database
       5. [X] Controller --> Client Application / Script
   12. [x] My Rest API Project:
       1. [x] Create a project folder / root folder
       2. [x] Create package.json file
       3. [x] Install Express
       4. [x] Install Node packages
       5. [x] Create index.js @root
       6. [x] Create app.js @root
       7. [x] Create config.env @root
       8. [x] Create src directory
       9. [x] Create src > controllers directory
       10. [x] Create src > models directory
       11. [x] Create src > routes directory