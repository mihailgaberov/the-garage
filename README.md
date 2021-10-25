# The Garage

A simple app implementing a _parking garage_. 

## Functionality:
 - List all vehicles in the garage. 
 - The list supports paging.
 - The list can be filtered by level and/or by type. Multiple filters can be selected, also from
different categories. Filters within one category are OR connected; filters in different
categories are AND-connected.
 - The list can be filtered by typing the license number into the search field.

## Tech stack
- React / Typescript
- SASS / styled-components
- react-testing-library

### Screenshots
![Default View](https://github.com/mihailgaberov/the-garage/blob/main/screenshots/no-filters.png)
![View with applied filters](https://github.com/mihailgaberov/the-garage/blob/main/screenshots/with-filters.png)
![View with applied filters and search](https://github.com/mihailgaberov/the-garage/blob/main/screenshots/with-search.png)
![iPad](https://github.com/mihailgaberov/the-garage/blob/main/screenshots/ipad.png)
![iPhone](https://github.com/mihailgaberov/the-garage/blob/main/screenshots/iphone.png)
![iPhone X](https://github.com/mihailgaberov/the-garage/blob/main/screenshots/iphone_x.png)
![iPhone Landscape View](https://github.com/mihailgaberov/the-garage/blob/main/screenshots/iphone_landscape.png)
![iPhone 11 (real device) Filters view](https://github.com/mihailgaberov/the-garage/blob/main/screenshots/iphone11_filters_view.jpg)
![iPhone 11 (real device) List view](https://github.com/mihailgaberov/the-garage/blob/main/screenshots/iphone11_list_view.jpg)


### Demo
:star: [https://the-garage-three.vercel.app/](https://the-garage-three.vercel.app/) :star:

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
