# geoJSON Editor

Application for creating/editing geoJSON files (based on Leaflet-Geoman)

## Available Features

### Uploading geoJSON Files

Support uploading files containing FeatureCollection or Feature.\
Supported shapes:

- Polygon
- MultiPolygon
- Point\
  rest shapes will be ignored

Line and Polyline support are in work

### Creating geoJSON Files

With 'Draw' mode you can create Polygon and then save it as geoJSON file

### In Progress

- Uploading files containing Line and Polyline shapes
- Colorful / Monochrome map toggle
- Merging Polygons
- Download as Feature or as FeatureCollection toggle
- Editing shapes one at the time / all at the same time toggle

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
