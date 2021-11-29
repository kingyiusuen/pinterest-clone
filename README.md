# Pinterest Clone

![build status](https://github.com/kingyiusuen/pinterest-clone/actions/workflows/deploy.yml/badge.svg)
[![License](https://img.shields.io/github/license/kingyiusuen/pinterest-clone)](https://github.com/kingyiusuen/pinterest-clone/blob/master/LICENSE)

A Pinterest clone using the MERN stack.

## Live demo

You can try it out online at https://pinterest-clone-ksuen.herokuapp.com/.

![](https://i.imgur.com/9rBhKVa.png)

## Features

### User Authentication

- User passwords are encrpyted using `bcrypt` before they are stored in the database.
- When a user is logged in, a JWT token is created and stored in the `localStorage` of the client's browser. On every page reload, the website will check whether an unexpired JWT token exists in `localStorage` and authenticate the user automatically. Therefore, users don't need to login again even after they close the webpage.
- The token is included in every HTTP request to the server to authorize the request. The server uses `passport.js` to authenticate the token.
- Authenticated users will be redirected to the home page, if they try to access the login or signup page.
- Non-authenticated users will be redirected to the login page, if they try to access anywhere other than the login and signup page.

### Search Photos

- Users can input a keyword in the search box. A request will be made to Unsplash using its [official API](https://unsplash.com/developers). The most relevant 30 photos will be returned.
- When the user is at the home page with no input in the search box, 30 random photos from Unsplash will be shown.

### Account Features

- Users can save (and unsave) photos they like. Users can view their saved photos in their profile page.

## Tech Stack

- React and CSS for building the user interface.
- React Redux for handling user authentication and which photos to show in the frontend.
- React Router for routing.
- Node.js and Express for creating API endpoints in the backend.
- MongoDB for storing user information including URLs of the photos the users saved.
- ESLint and Prettier for linting and formatting.
- Github Actions for automatic deployment to Heroku.

## Future Improvments

- Allow users to upload photos.
- Allow users to create boards to organize saved photos.
- Allow users to follow other users.
- Allow users to change their avatar and edit their personal information.
- Infinite scrolling.

## Installation

- Clone the repo.
- Run `npm install` to install dependencies for the server.
- Run `cd client` and then `npm install` to install dependencies for the client.
- Create a free account in [MongoDB Atlas](https://www.mongodb.com/atlas/database).
  - Create a cluster (may take 10 minutes).
  - Go to the "Database Access" tab on the sidebar and create user credentials for the database.
  - Go to "Network Access". Define the IP addresses that are allowed access to the database. You can simply allow access from all IP addresses.
  - Go to "Databases". Click "Connect" and then "Connect your application" to get the MongoDB URI.
- Sign up for a developer account in [Unsplash](https://unsplash.com/developers). Create a new application to get the access key.
- Create two `.env` files, one in `server`, one in `client`, following the format of the corresponding `.evn.example` file. Fill in the details.

## Running the App in Development Mode

- Run `npm run client` to start the client.
- Run `npm run server` to start the server.
- Run `npm run dev` to start the client and the server concurrently.

## Deploy to Heroku

- Install [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).
- Run `heroku login` to login to your Heroku account.
- Run `heroku create <your heroku app name>` to create a Heroku app.
- Run `heroku git:remote -a <your heroku app name>` to set a git remote named `heroku` to your Heroku app.
- Run `heroku config:set <enviornment variable>=<value>` to add environment variables in the two `.env` files to your Heroku app.
- Run `git push heroku master` to deploy.
