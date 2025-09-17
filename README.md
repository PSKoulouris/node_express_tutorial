Tutorial Node.js, Express.js Back-end

1- Install Express.js:

2- npm init: Creates a package.json file in the project.

npm install express: installs Express.js from the npm registry. Saves it in the node_modules/ folder. Adds it to "dependencies" in package.json as follow: 

        "dependencies": {
        "express": "^5.1.0"
        }

3- npm install nodemon --save-dev : Installs Nodemon, a tool that automatically restarts your server when you change files.

4- Change in package.json → "start": "nodemon app.js" as follow:
        
        "scripts": {
            "start": "nodemon app.js"
        },
5- npm start: start your app with Nodemon instead of plain Node


