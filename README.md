# Just Another Text Editor (J.A.T.E)

## Description

J.A.T.E is a web-based text editor that runs in the browser. It's a single-page application that meets the PWA criteria and features multiple data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application also functions offline.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [License](#license)

## Installation

To install and run this project locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the dependencies.
4. Run `npm run start:dev` to start the development server.
5. Open your browser and visit `http://localhost:3000`.

To install the application as a PWA, click the "Install!" button in the application's header.

## Usage

1. Open the application in your web browser.
2. Start typing or pasting your text in the editor.
3. Your content will automatically be saved as you type.
4. You can close the browser and return later to find your content persisted.
5. The application works offline, allowing you to work without an internet connection.

## Features

- Create and edit text documents
- Syntax highlighting for JavaScript
- Offline functionality
- Installable as a Progressive Web Application (PWA)
- Data persistence using IndexedDB
- Bundled with Webpack
- Uses Babel for backwards compatibility

## Technologies Used

- HTML/CSS/JavaScript
- IndexedDB for storage
- Webpack for bundling
- Workbox for service worker and PWA functionality
- Babel for backwards compatibility
- Express.js for the server

## License

This project is licensed under the MIT License.
