# JobTrack
client folder: front end
   -The build folder in client was done after finishing everything, You can build it yourself so feel free to remove it.
everything outside client folder: backend

#### Track Your Job Search

Project in Action - [Jobify](https://github.com/johngit23)

#### Run The App Locally

- npm run install-dependencies
- make the changes below in .env if you wish
- setup values for - MONGO_URL, JWT_SECRET, JWT_LIFETIME in the .env
- npm start
- visit url http://localhost:3000/

#### Setup React App

- create 'client' folder
- open terminal
- cd client
- npx create-react-app .
- npm start
- set editor/browser side by side
- copy/paste assets from complete project

# Spring Cleaning

- in src remove
- App.css
- App.test.js
- logo.svg
- reportWebVitals.js
- setupTests.js
- fix App.js and index.js

#### Title and Favicon

- change title in public/index.html
- replace favicon.ico in public
- resource (favicons)[https://favicon.io/]

#### Normalize.css and Global Styles

- CSS in JS
- saves times on the setup
- less line of css
- speeds up the development
- normalize.css
- small CSS file that provides cross-browser consistency in the default styling of HTML elements.
- (normalize)[https://necolas.github.io/normalize.css/]
- npm install normalize.css
- import 'normalize.css' in index.js
- SET BEFORE 'index.css
