## Pop Quiz - Day 1

1. What is destructuring? Why would you use it?
   Syntactic sugar for extracting from arrays or objects
2. What library renders React for the web?
   ReactDOM
3. Var is dead. Why? What should you use instead?
   Var scopes to the entire module/file. Use const/let instead.
4. How do you copy an object in JS? Is it a deep or shallow copy? What's the diff?
   Object assign
5. What tool did we use to generate our React app?
   create-react-app
6. The tool we used, uses Webpack. What's webpack?
   Bundles files together
7. What is Babel?
   Transpiles JS to older versions for browser compatibility
8. What tool am I using to format my code? Why is autoformatting useful?
   Prettier. Makes code more uniform across teams/orgs
9. What hook did we use for handling data that changes over time?
   use state
10. When does React re-render?
    When state changes
11. What hook did we use to run code once, when the component first loads?
    Use effect
12. We created an infinite loop yesterday with that hook. What was our mistake?
    Use effect would trigger a state change, causing a rerender
13. What tool did we use to create a mock API? Why not just hard code some JSON instead?
    json-server. So you don't lose your state
14. What did we use to make an HTTP call?
    fetch. Could also use axios
15. What is the name of React's "flavor" of HTML?
    jsx
16. Name at least 3 differences between HTML and the answer to 15.
    classname vs class, HTML for vs normal for, object styles camel-cased, camel-cased props, comment via block
17. Is JSX required?
    No
18. What is JSX compiled down to?
    JS and HTML
19. What tool is checking our code quality? Is it configurable? How do I see its output?
    ESLint. Yes, very configurable
20. Debugging: How do I debug my React app?
    Put a debugger statement in with dev tools open on the browser
21. I can see my original code in the browser. Is the browser running my original code? If not, what technology is allowing me to see my original code?
    No. Source maps, used if dev tools are open
22. What is a function that returns a boolean?
    Predicate. Usually used for filter/map/find/some/every (higher-order functions)
23. Name some useful array methods that are friendly to immutable data.
    Filter, map, find, some, every

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
