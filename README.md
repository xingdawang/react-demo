
## Table of Contents

- [Purpose](#purpose)
- [Folder Structure](#folder-structure)
- [Design & Implementation](#design--implementation)
  - [Design](#design)
    - [Programming Paradigm](#programming-paradigm)
    - [UI/UX Design](#uiux-design)
    - [Mobile Design](#mobile-design)
    - [Desktop Design](#desktop-design)
  - [Implementation](#implementation)
    - [Platform as a Service (Paas)](#platform-as-a-service--paas)
    - [Styling]
    - [Front-end]
    - [Back-end]
- [NPM Commands](#npm-commands)
- [Package & Tool References](#package--tool-references)
  - [Package](#package)
  - [Tool](#tool)
- [License](#license)
 
### Purpose
This project is designed for the React presentation demo.

It gives users `Theory` and `Practice` options for the next series, and allow users to select between these two categories. The higher level topics and more advanced tools will be in the category `Theory`, which contains [GraphQL](https://graphql.org/) and [Redux](https://redux.js.org/) at the moment. And for the users who prefer practical exercises, there will be an exercise from `ECMASCript 6` (`ES6`), followed with two small projects, one is `Gallery` which using [React](https://reactjs.org/) to build a image wall; the other is to create a `Health Calculator` to help user manage their health conditions.

### Folder Structure
```
react-presentation-feedback/
    node_modules/
    public/
    src/
        actions/
        assets/
        components/
        containers/
        reducers/
        styles/
    .babelrc
    .gitignore
    package.json
    package-lock.json
    README.md
    webpack.config.js
```
### Design & Implementation
#### Design
##### Programming Paradigm
As the purpose of this application is to get user preference, which is data orientated. the programming paradigm used here is: [Data-Driven Programming](https://en.wikipedia.org/wiki/Data-driven_programming).
##### UI/UX Design
> Create a visual language that synthesizes classic principles of good design with the innovation and possibility of technology and science.
> 
> Develop a single underlying system that allows for a unified experience across platforms and device sizes. Mobile precepts are fundamental, but touch, voice, mouse, and keyboard are all ﬁrst-class input methods.

* Thus the visual design locked using: [Material Design Design](https://material.io/guidelines/material-design/introduction.html#)
* Usability focus, idea from [Don't make me think](https://www.amazon.com/Dont-Make-Me-Think-Usability/dp/0321344758)

After carefully revision and refinment:
##### Mobile Design
![Mobile Design](https://i.imgur.com/mUMKM9E.jpg)
##### Desktop Design
![Destop Design](https://i.imgur.com/lQgiNPU.jpg)
#### Implementation
##### Platform as a Service (PaaS)
> Platform as a Service (PaaS) or platform base service is a category of cloud computing services that provides a platform allowing customers to develop, run, and manage applications without the complexity of building and maintaining the infrastructure typically associated with developing and launching an app.

As treating every sources including the platform as services, thus the implementation to achieve the function will naturally fails into the category as `Front-end` and `Back-end`, `Front-end` will be responsible mainly for rendering UI, which to be more frankly, how page looks like; and `Back-end` will be responsible for dealing with data manipulation, which can be easily considered as how data is processed.

Frontend / Backend
Frontend: React & Redux / Design pattern
Backend: GraphCool
#### Styling
Mobile First

### NPM Commands

### Package & Tool References
Besides [Redux](https://redux.js.org/) package, several packages and tools are also used to help finish this demo project, for more details and version usages, please reference `package.json` file.
#### Package:
* [apollo-client](https://github.com/apollographql/apollo-client) - Integrate GraphQL client with React
* [autoprefixer](https://github.com/postcss/autoprefixer) - Auto adapt css for different browsers
* [babel](https://babeljs.io/) - JS transpiler
* [css-loader](https://github.com/webpack-contrib/css-loader) -  Interprets @import and url() like import/require()
* [file-loader](https://github.com/webpack-contrib/file-loader) - A file loader module for webpack
* [graphql](https://graphql.org/) - query language for APIs and a runtime for fulfilling queries
* [json-loader](https://github.com/webpack-contrib/json-loader) - A library helps to load JSON file
* [material-ui](https://www.material-ui.com) - Google's material design UI components built with React. 
* [path](https://www.npmjs.com/package/path) - A library for matching path for wepback
* [react-flexbox-grid](https://roylee0704.github.io/react-flexbox-grid/) - Responsive modifiers enable specifying different column sizes, offsets, alignment and distribution etc.
* [react-google-charts](https://github.com/RakanNimer/react-google-charts) - A React JS wrapper to make it easy and fun to work with Google Charts.
* [redux](https://redux.js.org/) - Redux is a predictable state container for JavaScript apps
* [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom) - 
DOM bindings for React Router
* [sass-loader](https://github.com/webpack-contrib/sass-loader) - A library that provides binding for Node.js to LibSass, the C version of the popular stylesheet preprocessor, Sass.
* [style-loader](https://github.com/webpack-contrib/style-loader) - A preprocess library for Webpack to load sytlesheets
* [url-loader](https://www.npmjs.com/package/url-loader) - Loads files as `base64` encoded URL
#### Tool:
* [Webpack](https://webpack.js.org/) - Module bundler
* [GraphCool](https://www.graph.cool/) - Open-source framework to develop and deploy production-ready serverless GraphQL backends
* [GitHub](https://github.com) - Version control
* [GitHub Pages](https://pages.github.com/) - web host

### License
MIT
