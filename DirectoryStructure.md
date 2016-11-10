#Week of 14 Homework Node Express Handlebars

#### Directory structure:
All the recommended files and directories from the steps above should look like the following structure:
```
.
├── config
│   ├── connection.js — This just holds the **server connection to MySQL**, and exports it in the variable **module.exports = connection**;
						It gets imported in orm.js through **var connection = require('./connection.js’);**
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   ├── assets
│   │   ├── css
│   │   │   └── burger_style.css
│   │   └── img
│   │       └── burger.png
│   └── test.html
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```

-------
### One More Thing
This is a really tough homework assignment, but we want you to put in your best effort to finish it. If you get stuck at any point, don't hesitate to contact a TA or your instructor.

** Good Luck!**

## Copyright
Coding Boot Camp (C) 2016. All Rights Reserved.
