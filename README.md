# blog-web-app

_A blog website user can write, edit or delete articles._

This is a web application created using Express.
It uses EJS view engine and Bootstrap CSS.

## To build the project

Use npm installer to install the node modules

```
npm i
```

And then run the project using node

```
node index.js
```

To change the theme colors, modify the sass file in scss/bs-theme.scss and change colors of the variables. Then run the following line.
```
sass ./scss/bs-theme.scss ./public/styles/bs-theme.css
```