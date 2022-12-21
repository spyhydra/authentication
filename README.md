# User Authentication

![not found](https://user-images.githubusercontent.com/49969478/206452495-95c112b2-8a07-4192-80c6-e82bc152fa35.png)
)
## Technologies Used
1.  NodeJS
2.  Express
3.  EJS
4.  MongoDB

## Prerequisites
- MongoDB
- Git
- NodeJS
- CLI

## Installation

##### Clone the latest Repository

`git clone https://github.com/spyhydra/autentication.git`

##### Into the project directory

`cd authentication`

##### Installing NPM dependencies

`npm install
 npm install bcrypt
 npm install nodemon
`

##### Then simply start your app

`npm start`

#### The Server should now be running at http://localhost/

## Folder Structure

habit <br>
├── assets <br>
│ --- ├── css <br>
│ --- └── images <br>
│ -------- └── js <br>
│ -------- └── bootstrap.min.css <br>
├── config <br>
│ --- └── middleware.js <br>
      └── mongoose.js <br>
      └── nodemailer.js <br>
      └── passport-google.js <br>
      └── passport-local.js <br>
      
├── controller <br>
│ --- └── home_controller.js  <br>
      └── users_controller.js <br>
     

├── models <br>
│
│ --- └── user.js <br>
├── node_modules <br>
├── routes <br>
│ 
│ --- └── index.js <br>
| --- └── users.js

├── views <br>

│ --- ├── forgetpass.ejs <br>
│ --- ├── index.ejs <br>
│ --- ├── login.ejs <br>
│ --- ├── profile.ejs <br>
│ --- └── resetPass.ejs <br>
│ --- └── signup.ejs <br>
├── .gitignore <br>
├── index.js <br>
├── package.json <br>
├── package-lock.json <br>
└── README.md <br>
