Tutorial Node.js, Express.js Back-end

Install Express.js:
    

1- Creates a package.json file in the project: 

    npm init

Installs Express.js from the npm registry:
    
    npm install express 

Saves it in the node_modules/ folder and adds it to "dependencies" in package.json as follow: 

        "dependencies": {
        "express": "^5.1.0"
        }

2- Installs Nodemon, a tool that automatically restarts your server when you change files:
    
    npm install nodemon --save-dev

3- Change in package.json → "start": "nodemon app.js" as follow:
        
        "scripts": {
            "start": "nodemon app.js"
        },

4- Start your app with Nodemon instead of plain Node:
    
    npm start


