This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Table of Contents

- [Important Notes](#important-notes)
- [Getting Started](#getting-started)
- [Further Notes](#further-notes)
  - [Extra Work](#extra-work)
  - [Available API Data](#available-api-data)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
  - [npm run eject](#npm-run-eject)  

## Important Notes

Since browsers restrict cross-origin HTTP requests initiated from within scripts (for security reasons), it is recommended that this app is viewed in Google Chrome with the 'Allow-Control-Allow-Origin' extension installed. Cross-origin resource sharing can then be enabled within the extension settings.

## Getting Started

- $ git clone https://github.com/gurtaj1/code-test.git
- $ cd code-test
- $ npm install
- $ npm start

## Further Notes  

### Extra Work  

I have not, as of yet, had any experience in writing tests. If I had allowed myself more time on this project, I would have certainly applied unit testing as I understand the importance of test driven development.  
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

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!