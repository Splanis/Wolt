# Wolt Summer 2020 Internships - Engineering Pre-assignment Front End Project
This is my pre-assignment task for Wolt's engineering intern position.

# Overview
This project was developed with React library. First of all, exclusively functional Components were used as they are more simple, comprehensive and understandable. The project logic is simple. Inside the <App /> Component there are two basic layout Components, <Navbar /> and <Footer />. The third Component is <Restaurants /> Component. <Restaurants /> Component gets its data from a Context API Component, <RestaurantsContext />. Context API was used as it's a good way to handle State globally in big projects in real-word. Inside <Restaurants /> Component there two Components. The first Component is <Sort /> which handles the alphabetically sort of Restaurants in ascending and descending. The second Component is <Restaurant /> which displays each Restaurant data like image, name, description, etc.

# Requirements
The only requirement you will need to run the project is Node.js with NPM. 

To see if you have it installed just type
  
    $ node --version
    v12.10.0
    % npm --version
    6.10.3
    
To install it:
#### For Windows
* Just download and install it from the official website https://nodejs.org/en/download/

#### For MacOS
    $ brew update
    & brew install node

#### For Linux 
    $ curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash -sudo apt-get install -y nodejs
    $ sudo apt-get install -y nodejs

## Install Dependencies
Type:

    $ cd Wolt
    $ npm install

# Run Project
Type:

    $ npm start
This will run the project on http://localhost:3000/

# Bonus task: Blurhash
After some googling I found your implementation of blurhash with React (https://github.com/woltapp/react-blurhash) so I used react-progressive-image Component to display the blurhash while loading the real image.

# A few words about myself
My name is Marios and I was born in Greece. I study Computer Science in University of West Attica (ex. Technological Educational Institute of Athens) and I am going to graduate next year. I took Programming up about 8 months ago with some Java and C++ and Web Development about 5 months ago with HTML, CSS, Javascript and Python.