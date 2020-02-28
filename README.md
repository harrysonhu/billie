This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

This command lets you see some cute dogs!

I implemented the feature to select a dog by breed, and also sorted the breeds in the dropdown for ease of use.

### TODOs

-   I would move the business logic out of the App and into some top level manager component. That keeps App.js clean.
-   Style my Dropdown component to make it look better than the default dropdown
-   Clean up the logic inside my useEffect hook that sets all the breeds and sub-breeds. There must be a more efficient way to do that logic, but I didn't spend time to figure it out.
-   Write unit tests for my custom Button, Dog and Dropdown component
-   Provide better keys for repeating child components
-   Look at accessibility issues with my markup
