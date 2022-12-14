Part 2: React Router Color Factory
The goal of this exercise will be to use React Router to build an app that lets you view colors and add new colors.

User Stories
As a user, I can go to /colors to see a list of all available colors.

As a user, I can click on one of the colors in my colors list and get taken to a page where I can see that color in all its glory.

(The route here should be /colors/:color )

As a user, I can click on a button to show a form that will let me add a new color.

Note that you can give an input a type of color if you’re trying to select a color. (The route here should be /colors/new)

As a user, when I submit my new color form, I am redirected to the colors index, and my new color appears at the top.

As a user, if I try to navigate to a color page that does not exist (eg, /colors/blargh), I am redirected to the colors index page.

As a user, if I try to navigate to an invalid url (eg, /this-is-not-valid), I am redirected to the colors index page

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

