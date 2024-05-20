# Capstone project for the Meta Front-End Developer Professional Certificate

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


# Little Lemon Restaurant

Welcome to the Little Lemon Restaurant project! This project is a capstone assignment where we create a restaurant web page with a "Reserve a Table" functionality using React.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Testing](#testing)
- [Technologies Used](#technologies-used)


## Introduction

Little Lemon Restaurant is a web application built using React. The primary feature of the application is the "Reserve a Table" functionality, which allows users to select a date and time for their reservation.

## Features

- **Home Page**: Introduction to the restaurant with a welcoming message and overview.
- **Menu Page**: Displays the restaurant's menu items. (Not developpeed)
- **Reserve a Table**: Allows users to select a date and time for their reservation.
- **Order Online**: Allows users to order a delivery. (Not developpeed)
- **Login**: Allows users to login to the website. (Not developpeed)
- **Responsive Design**: Ensures the application works well on different devices.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/RomaissaH/LittleLemon-Capstone-Project-Front-End.git
    cd LittleLemon-Capstone-Project-Front-End
    ```
2. **Install dependencies**:
    ```bash
    npm install
    ```

## Usage

To start the development server, run:

```bash
npm start
```

This will start the application at http://localhost:3000.

## Project Structure

Here is an overview of the project structure:

```bash
LittleLemon-Capstone-Project-Front-End/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── ReservationForm.jsx
│   │   └── ...
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Menu.jsx
│   │   ├── Reserve.jsx
│   │   ├── Contact.jsx
│   │   └── ...
│   ├── App.jsx
│   ├── index.js
│   └── ...
├── .gitignore
├── README.md
├── package.json
└── ...
```

## Testing

To run the tests for the application, use:

```bash
npm test
```
This will launch the test runner in the interactive watch mode.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Router**: For handling routing.
- **React Hooks**: For managing state and handling user interactions.
- **React Testing Library**: For testing React components.
- **Jest**: For running tests.
- **HTML**: For structuring the web pages.
- **CSS**: For styling the application.