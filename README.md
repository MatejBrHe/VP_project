# VP_project
This is a visualization that shows market share of operating systems in Europe for April 2025. It was made as a project task for a course Data visualization.

Data downloaded from [here](https://gs.statcounter.com/os-market-share/desktop/worldwide/).

TopoJSON downloaded from [here](https://github.com/leakyMirror/map-of-europe).

## Project structure
This project is organized in two directories:
1. data
   - Contains all of the data that is shown with this visualization
   - Contains a Python script that was used for transforming data
2. src
   - Contains a index.html with the main code
   - Contains a TopoJSON file for the map
   - Contains a server.js and other node.js files (like package.json)

## Usage
To use this visualization you have to clone this repo. After you clone the repo navigate to src directory. In src directory install express as a dependency (use one of the commands bellow).

```
npm install express
```
OR
```
npm install
```

After you have installed all dependencies you can start the server.

```
node server.js
```

Then you can go to [http://localhost:3000](http://localhost:3000) to see the visualization.
