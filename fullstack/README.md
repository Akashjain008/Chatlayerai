## Assignment

The EchoBot is a tiny chatbot that repeats anything you say to it.

```
App Demo:
````
![Empty Screen](/fullstack/echobot.gif "EchoBot")

### Backend

The backend is an API that contains the logic for the EchoBot. It allows one to send a request containing a message. The EchoBot will respond by echoing that message back as the response. 


### Frontend

Build a chat widget that will allow the user to send a message to the EchoBot's backend.

These are the minimum required components the frontend should consist:

- a **text input field** for users to enter their expression
- a **send button** allowing users to send the expression to the EchoBot
- a **list of messages**, printing historical messages from both the user and the EchoBot.


# EchoBotBackend Setup
```
cd EchoBotBackend
```
## Install dependencies
```
npm install
```
## Development server
```
npm start
```
The app will start on server `http://localhost:3000`.

# EchoBotClient Setup
```
cd EchoBotClient
```
## Install dependencies
```
npm install
```

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).


