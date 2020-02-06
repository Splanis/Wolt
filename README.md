# Wolt Summer 2020 Internships - Engineering Pre-assignment Front End Project

This is my pre-assignment task for Wolt's engineering intern position.

# Overview

This project was developed with React library. First of all, Hooks were used exclusively as they are simple and comprehensive. Also I used
styled-components because I wanted to have Components' logic and style in the same place. The project logic is simple. Inside the 'App'
Component there are two layout Components, 'Navbar' and 'Footer'. The third Component is 'Restaurants' Component. 'Restaurants' Component
uses Context API, 'RestaurantsContext' to handle data. Context API was used as it's a good way to handle data globally in big projects in
real-word. Inside 'Restaurants' Component there is the 'Restaurant' Component which displays each Restaurant data like image, name,
description, delivery price and tags. The fourth Component of 'App' is 'Header'. 'Header' containts 2 Components, 'Sort' Component which
handles the alphabetically sort of Restaurants in ascending and descending and 'Layout' Component which handles the change of Layout between
Grid and List using 'LayoutContext' Context API. Through the whole development I used git to version control my code.

# Requirements

The only requirement you will need to run the project is Node.js with NPM.

To see if you have it installed just type

    $ node --version
    v12.10.0
    $ npm --version
    6.10.3

To install it:

#### For Windows

-   Just download and install it from the official website https://nodejs.org/en/download/

#### For MacOS

    $ brew update
    $ brew install node

#### For Linux

    $ curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash -sudo apt-get install -y nodejs
    $ sudo apt-get install -y nodejs

## Install Dependencies

    $ cd Wolt
    $ npm install

# Run Project

    $ npm start

This will run the project on http://localhost:3000/

# Bonus task: Blurhash

After some googling I found your implementation of blurhash with React (https://github.com/woltapp/react-blurhash) so I used
react-progressive-image Component to display the blurhash while loading the real image.

# A few words about myself

My name is Marios, I was born in Greece and I currently live in Athens. I study Computer Science in University of West Attica and I am going
to graduate next year. I took programming up about 5 months ago with HTML, CSS, Javascript and Python. This project was really challenging
for me as I had no experience with Javascript's Frameworks and this was my first project with React, but I found this library really awesome
and I love working with it. Currently I am looking for an internship to complete my studies and moving abroad to work and learing in a
company like Wolt seems really adventurous.
