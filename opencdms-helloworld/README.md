# opencdms-helloworld

Sample web component to be used in the opencdms application shell.


## How to use

1. Clone the opencdms-app-shell
2. Install the web component `npm i opencdms-helloworld`
3. Create a  view page in `src/views` where the component would be rendered in. An example has been done in `src/views/CustomElementDemo.vue`.
4. Create a route entry in `src/routes` for the page created in step 3 above.
5. Create a registry entry in src/registry.json for the page created above. Set the display to true to include the page in side navigation bar.
6. Launch the application. (npm run serve)
 

## How to make yours

To create your own component using vuejs. 

1. Use vue cli to create a Vue 3 project where the web component would be built.
2. Define the component or page you want to export as a web component. 
3. You do not need the `src/App.vue` file. Delete it and also remove the contents of main.js file.
4. Import the component into `src/main.js` and define your component like so:

```
import { defineCustomElement } from 'vue';
// Import the component or page to be rendered as web component
import HelloWorld from './components/HelloWorldComponent.vue';

//Define it as a web component
const element = defineCustomElement(HelloWorld);

// Define the custom tag to be used to render the page. NOTE: The tag must be prefixed with `opencdms-`
customElements.define("opencdms-helloworld",element);

```

NOTE: The tag must be prefixed with `opencdms-`

5. Modify your package*.json files for export to npm. (ensure the "name" is unique, delete the `"private":false` field, add the entrypoint field `"main": "src/main.js"` to point to the main.js file).


### Testing

Before you export to npm, test it with opencdms to ensure it renders properly.

1. Inside the your local custom element package, run `npm link` to locally publish the package. 
2. Clone the opencdms app shell repo and install it running `npm install`
3. Install the locally published package into the application shell. `npm link opencdms-component` where opencdms-component is same with the name field in the package.json file of the package.
4. Import the component in any file where you want to render it.

```

<template>
   <div>
      <opencdms-component></opencdms-component>
    </div>
</template>
import 'opencdms-component'
...

```

## Publishing to NPM

Login into the appropriate account and run `npm publish`





