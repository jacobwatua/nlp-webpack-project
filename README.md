# Natural Language Processing Project

This project is part of the Natural Language Processing (NLP) course and focuses on implementing NLP techniques to analyze the attributes of an article or blog post. The project utilizes the MeaningCloud API for NLP analysis and incorporates Webpack for module bundling and development server configuration.

## Project Overview

The goal of this project is to create a web application that allows users to enter an article or blog post and retrieve various attributes, such as agreement, confidence, irony, and subjectivity. The project includes the following features:

- Integration with the MeaningCloud API for NLP analysis
- Webpack configuration for bundling JavaScript modules, handling Sass styles, and enabling hot module replacement during development
- Service workers implementation for offline functionality and caching
- Dynamic updating of the DOM with the analyzed attributes of the article
- Error handling for API requests and form submissions

## Getting Started

To get started with the project, follow these steps:

1. Clone this repository to your local machine.
2. Install the project dependencies by running `npm install --legacy-peer-deps` in the project directory.
3. Create a new file named `.env` in the project root directory.
4. Open the `.env` file and add the following configuration:
    API_KEY=YOUR_MEANINGCLOUD_API_KEY
    PORT=3000

Replace `YOUR_MEANINGCLOUD_API_KEY` with your actual MeaningCloud API key.
Replace `3000` with the desired port number to listen to.

5. Save the `.env` file.

## Usage

1. Run the development server using `npm run build-dev`.
2. Open your browser and navigate to `http://localhost:3000` (or the PORT you specified) to access the application.
3. Enter an article or blog post in the input field on the web page.
4. Click the "Submit" button to initiate the NLP analysis.
5. The application will make a request to the MeaningCloud API and display the analyzed attributes on the page.
6. Review the attributes, including agreement, confidence, irony, and subjectivity.

## Testing

The project includes a set of Jest tests to ensure the functionality of key components and features. To run the tests, use the command `npm test`.

## Deployment

To deploy the project to a production environment, follow these steps:

1. Build the production-ready assets by running `npm run build-prod`.
2. The built assets will be available in the `dist` directory.
3. Configure your hosting provider to serve the contents of the `dist` directory.
4. Set the environment variables `API_KEY` and `PORT` according to your production environment configuration.
5. To start the express app run: "npm run start"

## Resources

- [MeaningCloud API Documentation](https://www.meaningcloud.com/developer/documentation)
- [Webpack Documentation](https://webpack.js.org/)
- [Jest Documentation](https://jestjs.io/)
