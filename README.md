# CSS based iOS 7 style toggle switch


Provides an AngularJS directive and Compass mixin for simple integration


## Installation

1. Open your bower.json
2. Add `"ios-toggle": "latest"` to your dependency list
3. Run `bower install`
4. In your application you can now add:
   * `<script src="bower_components/ios-toggle/ios-toggle.js"></script>`


## Usage

1. In your SCSS `@import "../bower_components/ios-toggle/ios-toggle";`
2. Use the `@include ios-toggle()` mixin to define your styles.
   * See `ios-toggle.scss` for customisation options
3. Create your progress element:

 
```html
<toggle bind="state"></toggle>
```

Where `$scope.state` will represent if the switch / toggle is active or inactive.
