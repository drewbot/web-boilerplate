# Hopspot Web Application
## Overview
The Hopspot web app is built in AngularJS, using Zurb Foundation, jQuery and ES6 syntax. Styles are described in Sass. Build scripts are written with Gulp.js.

## Installation
```
git clone http://gitlab.stopias.com/web/hopspot.git
cd hopspot
npm install
bower install
```

## Dependencies
Build related dependencies are installed using NPM. Always save to package.json when installing Node dependencies.

Ex:

```
npm install browserify --save-dev
```
Front-end dependencies are installed using Bower. As with Node dependencies, always save to bower.json. However, unlike Node dependencies Bower dependencies should only be saved as devDependencies if they are not intended to be used in the actual application (for example: testing assets).

```
bower install angular --save
bower install chai --save-dev
```

## Development Environment
* Use ```gulp serve``` to serve to localhost:9000. The port can be changed in gulpfile.js if necessary but changes to the serving port should only be made locally and not committed. Running ```gulp serve``` will also convert sass files to css, convert ES6 syntax to ES5, bundle javascript files, package images and fonts and watch for changes to files within the /app folder. The server will automatically reload changes to the /app folder.
* Use ```gulp build``` to build production-ready files to a /dist folder.
* Use ```gulp build-lite``` to build production-ready files to a /dist folder but without performing the imagemin task, saving build time greatly (this task is actually run during deployment).
* ```gulp bundle``` is the task which bundles and converts our ES6 files into browser-ready javascript. This task is ran during ```gulp serve``` and ```gulp build```. Note that this task will also create a sourcemap and place it in the /maps folder.

## Javascript Style Guide
Using ES6 syntax and isolating scope to individual "components" wherever possible, the intent of our JS styleguide is to build future-friendly front-end applications which embrace the direction of JS application development as described by industry leaders.
* Files are imported into /app/scripts/app.js and chained to the "hopspot" angular module.
* Files can be imported into other files if necessary but ultimately the last or the importers should be imported by /app/scripts/app.js.
Upon build, our bundle task will search the dependency tree starting at /app/scripts/app.js and import all files into a single browser-ready bundle.js file. Observe our index.html does not source /app/scripts/app.js but rather /app/scripts/bundle.js.

#### Classes

Most of our AngularJS controllers, services, factories and directives have been converted to ES6 class syntax. Instead of using Angular's ```$scope``` we use the ES6 class constructor's ```this``` to describe component-specific properties.

Ex:

```
class FakeController {
  constructor(envService, api) {
    var apiUrl = envService.read('apiUrl');

    angular.extend(this, {
        // Services
        api: api,

        // Custom keys
        myObj: {},
        myResult: ''
    });
  }

  myFunc() {
  	this.api.postData(object)
      .success((result) => {
		this.myResult = result;
      })
      .error((data, status) => {
      	this.myResult = data;
		console.log(status);
      });
  }
}

FakeController.$inject = ['envService', 'api'];

module.exports = FakeController;
```

A few things to note here:

* Services are passed into the constructor.
* We're extending "this" to contain our properties.
* Within the constructor we can reference the services directly by name.
* Our custom methods begin outside the constructor and can be named and described using method syntax with ES6.
* Within our custom methods we can refer to our services and custom properties by prefixing ```this``` (Services must first be saved to ```this```).
* We use ```$inject``` to inject our array of string named dependencies into our class. This allows for uglification during builds without losing reference to our services.
* Finally, we export our class.

#### Importing and Configuring

Pretty simple: just import your file into /app/scripts/app.js, declare variable name for reference and chain the appropriate method containing the declared variable name.

Ex:

```
// /app/scripts/app.js

import configRoutes from './config-routes.js';
import Api from './services/api.js';
import IntroController from './controllers/intro-controller.js';

angular.module('hopspot', ['ngRoute', 'ngSanitize'])
	.config(configRoutes)
	.service('api', Api)
	.controller('IntroController', IntroController);
```

#### Controller As

When configuring routes use the controllerAs methodology.

Ex:

```
// /app/scripts/config-routes.js

...
.when('/', {
	templateUrl: '../views/index.html',
	controller: 'IntroController',
	controllerAs: 'introController'
})
...
```

Then, within your templates, reference your controller's properties by chaining the property name to the conrollerAs name.

Ex:

```
// app/views/index.html

<button ng-click="introController.sendText()">Send text</button>
```

You can also name the controllerAs within a template if the controller isn't specific to a route.

Ex:

```
\<div ng-controller="FakeController as fakeController">
	{{fakeController.someProp}}
</div>
```

#### Environment and the envService

The envServiceProvider which is configured in app/scripts/config-routes.js defines the api to use based on your current environment. This service can also be used to manually check which environment is being used for other conditional loading or functionality.

```
// app/scripts/config-routes.js

envServiceProvider.config({
  domains: {
    development: ['localhost'],
    qa: ['qa.hopspot.com'],
    production: ['hopspot.com']
    // anotherStage: ['domain1', 'domain2']
  },
  vars: {
    development: {
      apiUrl: 'https://dev-api.hopspot.com',
      // staticUrl: '//localhost/static'
    },
    qa: {
      apiUrl: 'https://qa-api.hopspot.com',
      // staticUrl: '//localhost/static'
    },
    production: {
      apiUrl: 'https://api.hopspot.com',
      // staticUrl: '//static.acme.com'
    }
  }
});
```

#### API Usage

All API calls are made using methods attached to the API service class app/scripts/services/api.js. The class itself defines user and url information as well as the functionality needed to register and interact with our backend API. API references the envService and uses the correct api for your current environment. In order to use the api service simply inject the service into your controller class, add to ```this``` and access the chained methods.

Ex:

```
class FakeController {
  constructor(api) {

    angular.extend(this, {
        // Services
        api: api,

        // Custom keys
        myObj: {},
        myResult: ''
    });
  }

  myFunc() {
  	this.api.postData(object)
      .success((result) => {
		      this.myResult = result;
      })
      .error((data, status) => {
      	  this.myResult = data;
		      console.log(status);
      });
  }
}

FakeController.$inject = ['api'];

module.exports = FakeController;
```

## CSS Style Guide

#### Less is Better

Use Sass variables and mixins where possible. Try to build reusable object oriented css classes as opposed to nested structures which are heavily tied to markup structure.

#### Mobile First

Use Foundation's mobile-first media queries when possible and only create min-width media queries when a custom query is needed. All styles should first be declared at small (mobile) then built outward for larger screens using min-width media queries.

Try to isolate the responsive hiding, showing and column-width properties to the markup using Foundation classes.

## Further Resources

* [Exploring ES6 Classes In AngularJS 1.x](http://www.michaelbromley.co.uk/blog/350/exploring-es6-classes-in-angularjs-1-x)
* [Angular Style Guide ES2015/ES6](https://github.com/rwwagner90/angular-styleguide-es6#data-services)
* [An experiment in using ES6 features with AngularJS 1.x](https://github.com/michaelbromley/angular-es6)
