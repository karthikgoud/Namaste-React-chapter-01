# Chapter-01

## Theory

- What is Emmet?
- Difference between a Library and Framework?
- What is CDN? Why do we use it?
- Why is React known as React?
- What is crossorigin in script tag?
- What is diference between React and ReactDOM
- What is difference between react.development.js and react.production.js files via CDN?
- What is async and defer? - see my Youtube video ;)

1. What is Emmet?

   - It is a plugin for writteing code is fasterway
   - It creates code template or boiler plates
   - ex: HTML5, div>div>h1

2. Difference between a Library and Framework?

   The technical difference between a framework and library lies in a term called inversion of control.

   ### Library

   - Library is JS code which is injected in code with bare minimum setup.
   - A library is like going to Ikea. You already have a home, but you need a bit of help with furniture.
   - When you use a library, you are in charge of the flow of the application. You are choosing when and where to call the library.

   ### Framework

   - A framework, on the other hand, is like building a model home. You have a set of blueprints and a few limited choices when it comes to architecture and design.
   - Ultimately, the contractor and blueprint are in control
   - When you use a framework, the framework is in charge of the flow. It provides some places for you to plug in your code, but it calls the code you plugged in as needed.

3. What is CDN? Why do we use it?

   A content delivery network (CDN) refers to a geographically distributed group of servers which work together to provide fast delivery of Internet content.

   - Fastest way to get our code using multiple servers location
   -  Improving website load times
   - Reducing bandwidth costs
   - Increasing content availability and redundancy
   - Improving website security

[CDN Image] (https://cf-assets.www.cloudflare.com/slt3lc6tev37/540CpDkqSDg6QAPi5nO1AP/b44a3edb5abc4e115ddab9b4d9bf7a32/Learning-How-does-a-CDN-work.svg)

4. Why is React known as React?

   - It is called react because it reacts to the user events.
   - This API reacts to any state or property changes, and works with data of any form.

5. What is crossorigin in script tag?

   - The crossorigin attribute sets the mode of the request to an HTTP CORS Request.
   - Web pages often make requests to load resources on other servers. Here is where CORS comes in.
   - A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain.
   - CORS is used to manage cross-origin requests.
   - CORS stands for Cross-Origin Resource Sharing, and is a mechanism that allows resources on a web page to be requested from another domain outside their own domain. It defines a way of how a browser and server can interact to determine whether it is safe to allow the cross-origin request.
   - The opposite of cross-origin requests is same-origin requests. This means that a web page can only interact with other documents that are also on the same server.

6. What is diference between React and ReactDOM

   - ReactDOM is the glue between React and the DOM. Often, you will only use it for one single thing: mounting with ReactDOM.render()

   - For everything else, there's React. You use React to define and create your elements, for lifecycle hooks, etc. i.e. the guts of a React application.

   - The reason React and ReactDOM were split into two libraries was due to the arrival of React Native. React contains functionality utilised in web and mobile apps. ReactDOM functionality is utilised only in web apps

   - The react package contains React.createElement, React.createClass and React.Component, React.PropTypes, React.Children, and the other helpers related to elements and component classes. We think of these as the isomorphic or universal helpers that you need to build components.

   - The react-dom package contains ReactDOM.render, ReactDOM.unmountComponentAtNode, and ReactDOM.findDOMNode, and in react-dom/server we have server-side rendering support with ReactDOMServer.renderToString and ReactDOMServer.renderToStaticMarkup.

7. What is difference between react.development.js and react.production.js files via CDN?

   Development mode includes useful warnings and gives you access to tools that make development and debugging easier. Production mode minifies your code and better represents the performance your app will have on end users' devices.

8. Async vs Defer

(https://i.stack.imgur.com/wfL82.png)
