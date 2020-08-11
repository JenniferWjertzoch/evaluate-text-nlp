# Article Analysis Website

## Overview
In this project I built a web tool that allows users to run Natural Language Processing (NLP) on simple text inputs. Using the API called Aylien, the user will be able to interact with a NLP system. This tool will give back pertinent information about the text: whether the content is subjective (opinion) or objective (fact-based) and
whether it is positive, neutral, or negative in tone etc.

For this project, I used:
* Node
* Express
* Aylien API
* Webpack
* Service Worker

## Run project
Here you can see how to run the project in development and production mode.
### run in development mode
To start the webpack dev server at port 8080

` $ npm run build-dev`

### run in production mode
Generate the dist files and then start server at port 8083

` $ npm run build-prod`

` $ npm run start`

## API

The project uses an exciting new API called Aylien, you can build a simple web interface to interact with their NLP system. [aylien](https://aylien.com/text-api/sdks/). This tool will give back pertinent information about the article: whether the content is subjective (opinion) or objective (fact-based) and whether it is positive, neutral, or negative in tone.

## Offline Functionality
The project have service workers set up in webpack to provide an offline functionality.


## Testing

Testing is done with Jest. To run test, use the command

`npm run test`.