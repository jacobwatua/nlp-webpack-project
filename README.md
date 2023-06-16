<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Natural Language Processing Project</title>
</head>
<body># Natural Language Processing Project

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

  <h1>Natural Language Processing Project</h1>

  <p>This project is part of the Natural Language Processing (NLP) course and focuses on implementing NLP techniques to analyze the attributes of an article or blog post. The project utilizes the MeaningCloud API for NLP analysis and incorporates Webpack for module bundling and development server configuration.</p>

  <h2>Project Overview</h2>

  <p>The goal of this project is to create a web application that allows users to enter an article or blog post and retrieve various attributes, such as agreement, confidence, irony, and subjectivity. The project includes the following features:</p>

  <ul>
    <li>Integration with the MeaningCloud API for NLP analysis</li>
    <li>Webpack configuration for bundling JavaScript modules, handling Sass styles, and enabling hot module replacement during development</li>
    <li>Service workers implementation for offline functionality and caching</li>
    <li>Dynamic updating of the DOM with the analyzed attributes of the article</li>
    <li>Error handling for API requests and form submissions</li>
  </ul>

  <h2>Getting Started</h2>

  <p>To get started with the project, follow these steps:</p>

  <ol>
    <li>Clone this repository to your local machine.</li>
    <li>Install the project dependencies by running <code>npm install --legacy-peer-deps</code> in the project directory.</li>
    <li>Create a new file named <code>.env</code> in the project root directory.</li>
    <li>Open the <code>.env</code> file and add the following configuration:</li>
  </ol>

  <pre>
    <code>
API_KEY=YOUR_MEANINGCLOUD_API_KEY
PORT=3000
    </code>
  </pre>

  <p>Replace <code>YOUR_MEANINGCLOUD_API_KEY</code> with your actual MeaningCloud API key.</p>
  <p>Replace <code>3000</code> with the desired port number to listen to.</p>

  <p>Save the <code>.env</code> file.</p>

  <h2>Usage</h2>

  <ol>
    <li>Run the development server using <code>npm run build-dev</code>.</li>
    <li>Open your browser and navigate to <code>http://localhost:3000</code> (or the PORT you specified) to access the application.</li>
    <li>Enter an article or blog post in the input field on the web page.</li>
    <li>Click the "Submit" button to initiate the NLP analysis.</li>
    <li>The application will make a request to the MeaningCloud API and display the analyzed attributes on the page.</li>
    <li>Review the attributes, including agreement, confidence, irony, and subjectivity.</li>
  </ol>

  <h2>Testing</h2>

  <p>The project includes a set of Jest tests to ensure the functionality of key components and features. To run the tests, use the command <code>npm test</code>.</p>

  <h2>Deployment</h2>

  <p>To deploy the project to a production environment, follow these steps:</p>

  <ol>
    <li>Build the production-ready assets by running <code>npm run build-prod</code>.</li>
    <li>The built assets will be available in the <code>dist</code> directory.</li>
    <li>Configure your hosting provider to serve the contents of the <code>dist</code> directory.</li>
    <li>Set the environment variables <code>API_KEY</code> and <code>PORT</code> according to your production environment configuration.</li>
    <li>To start the express app run: <code>npm run start</code></li>
  </ol>

  <h2>Resources</h2>

  <ul>
    <li><a href="https://www.meaningcloud.com/developer/documentation">MeaningCloud API Documentation</a></li>
    <li><a href="https://webpack.js.org/">Webpack Documentation</a></li>
    <li><a href="https://jestjs.io/">Jest Documentation</a></li>
  </ul>
</body>
</html>
