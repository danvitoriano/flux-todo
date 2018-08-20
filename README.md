# React + Flux To Do App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

##[Live Demo](https://flux-todo-app.herokuapp.com/)

## Install

```
git clone git@github.com:danvitoriano/search-github.git
cd search-github
yarn install
```

## Run

```
yarn start
```

Starts the development server at [http://localhost:3000](http://localhost:3000).

## Run

```
yarn build
```

Create a production ready `/build` folder. You may serve it with a static server:

```
serve -s build
```

## Deploy

Use [Heroku Buildpack](https://github.com/mars/create-react-app-buildpack).

✏️ _Replace `$APP_NAME` with a name for your unique app._

```bash
heroku create $APP_NAME --buildpack https://github.com/mars/create-react-app-buildpack.git
git add .
git commit -m "Start with create-react-app"
git push heroku master
heroku open
```
