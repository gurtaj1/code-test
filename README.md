This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Table of Contents

- [Important Notes](#important-notes)
- [Sending Feedback](#sending-feedback)
- [How to Run](#how-to-run)
- [Further Notes](#further-notes)
  - [Extra Work](#extra-work)
  - [Available API Data](#navailable-api-data)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
  - [npm run eject](#npm-run-eject)  

## Important Notes

Since browsers restrict cross-origin HTTP requests initiated from within scripts (for security reasons), it is recommended that this app is viewed in Google Chrome with the 'Allow-Control-Allow-Origin' extension installed. Cross-origin resource sharing can then be enabled within the extension settings.

## How to Run

Since this project was created using create-react-app you can get all dependencies by follwing the 'Creating an App' [guidlines](https://github.com/facebook/create-react-app/blob/master/README.md#creating-an-app).  

You can then delete all the files and folders in your directory except the node_modules folder and the files within it.

You may then make a pull request of this repo and copy the files to the directory you have the node_modules folder located in.

The devDependencies (also found in the package.json file of this repo) are as follows:

- axios  
 install: npm install --save-dev axios@^0.18.0
- history  
 install: npm install --save-dev history@^4.7.2
- react  
 install: npm install --save-dev react@^16.3.0
- react-dom 
 install: npm install --save-dev react-dom@^16.3.0
- react-redux 
 install: npm install --save-dev react-redux@^5.0.7
- react-router  
 install: npm install --save-dev react-router@^4.2.0
- react-router-dom  
 install: npm install --save-dev react-router-dom@^4.2.2
- react-router-redux  
 install: npm install --save-dev react-router-redux@^5.0.0-alpha.9
- redux  
 install: npm install --save-dev redux@^3.7.2
- redux-devtools-extension  
 install: npm install --save-dev redux-devtools-extension@^2.13.2
- redux-thunk  
 install: npm install --save-dev redux-thunk@^2.2.0

Instructions for running this app can be found in [Available Scripts](#available-scripts) below.  

## Further Notes  

### Extra Work  

If I had allowed myself more time on this project, I would have looked into a way in which I could dispatch one action, upon the response of my last api call. Since this is my first time making api calls using Reactjs, I am not yet fully aware of what I can and can't do.

I have also not, as of yet, had any experience in writing tests. If I had I would have certainly applied unit testing to my project as I understand the importance of test driven development.  
All of my debugging was done by observing any errors found in the browser console whenever attempting to run the code. This was always followed by examination of the relevant pieces of code.
Some packages that I believe would have helped me with my testing and debugging are Jest and ESLint.

I understand the benefits of writing code functionally as opposed to procedurally. I adhered to writing my code functionally, as best as I could.

### Available API Data  

At the time of working on this project there were:
- Images for 14 out of the 20 sets.  
- Episodes for one of the sets.  
- An Image for one of the episodes.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.