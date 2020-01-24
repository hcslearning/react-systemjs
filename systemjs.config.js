/*global System */
'use strict';

System.config({
    transpiler: 'plugin-babel',
    babelOptions: {
        sourceMaps: false,
        stage0: true,
        react: true
    },
    meta: { },
    paths: {
      'npm:': 'https://unpkg.com/'
    },
    map: {
      // our app is within the app folder
      app: 'app/index.jsx', 
      "plugin-babel": 'https://unpkg.com/systemjs-plugin-babel@0.0.25/plugin-babel.js',
      "systemjs-babel-build": 'https://unpkg.com/systemjs-plugin-babel@0/systemjs-babel-browser.js',
      "react": "npm:react@16/umd/react.development.js",
      "react-dom": "npm:react-dom@16/umd/react-dom.development.js",
      "prop-types": "npm:prop-types/prop-types.js",
      "classnames": "npm:classnames@2.2.5",
      "font-awesome": "npm:font-awesome@4.7.0",
      "react-scripts": "npm:react-scripts@1.0.11",
      "react-transition-group": "npm:react-transition-group@2.2.1",
      "primereact": "npm:primereact@2.0.0-beta.9"

    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      'https://unpkg.com/' : { defaultExtension: false },
    }
});
 
System.import('app');

