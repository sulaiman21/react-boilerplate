# Getting Started with CSCS SmartCheck WebApp

To start and run in development mode, we need minimum `node 20.0.9`. Then install packages using YARN package manager.

## Feature Folder/Directory

Feature directory holds all the pages logics and files. Each page should be created under `/feature` directory first and then import it into `/pages` directory. The reason why we are using this directory structure is we will have a lot of logic going on under each page so each page will consider as a new feature. We will be adding redux files like actions, store etc under each feature separately to keep the code consistant and easy to manage.

So any component which is more specifically related to page i.e not a generic component, will also be located under `/features/<page name>/component` directory.

## Libs Folder/Directory

Any new package we install will be setup separately under `/libs` directory. It will hold all the packages and will be exported directly from `/libs/index.ts` file.

NOTE: Please don't use any package directly into any file.

## Hooks Folder/Directory

Any custom hook or package related hook will go under `/hooks` directory. We will manage hooks under `/hooks` directory.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
