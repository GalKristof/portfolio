### Gál Kristóf Portfolio ###

## HOW TO RUN ##

# To run the project, you need to do 3 steps #

- 1: First, run the `npm install` command in the terminal to install the necessary packages. It's enough just before the first run.
- 2: Secondly, run the `ng serve` command and wait for Angular to load up the website.
- 3: Open up `http://localhost:4200` in our browser.

Alternative solution: The page is already uploaded to this link: `https://galkristof.eu`.

## BUILD UP ##

The project builds up in one file: `app.component.html` - all other components are called here..

The data is loading from this folder: `src/app/data`.

## USAGE ##

There is a nav bar (which is a hamburger menu on phone) where you can navigate to all important parts of the page.

There are three main functionalities in the nav bar:
- Language selector (English and Hungarian so far)
The language selector is built upon the languageService. 
The languageService detects language automatically: checks the used languages of the user: if it contains Hungarian, then it sets that as primary language,
but any other cases it's English and changeable through the button.

- Theme selector. (lamp / moon icon)
The theme selector builds upon the navigation component. It detects the base style used by the user. It's either light or dark, sets the detected one if there is. If there is no found theme, then the dark will be default - just personal reason, I believe that looks better, but changeable through this button.A témaválasztó a navigációs komponensben épül fel. A felhasználó eszközének alapértelmezett stílusát veszi figyelembe.

- An arrow
Okay okay, this is not in the nav bar, however still part of navigation. This can be found in the bottom right corner if we scrolled down a little bit and then want to go back to the top of the page.

In the skills section I tried to pull up the mostly used technologies by me, it doesn't matter that I've never met with anything else, nor that I am perfect in these technologies already.
The skills are loaded from this file: `src/app/data/skill-list.ts`.

I used EmailJS for the contact email sending and I used Google's reCAPTCHA to remove bots sending me emails.

## P.S. ##

It was a main goal while making the site, to use mostly WEBP and SVG, so the website can be loaded fast.

Thank you for checking out my portfolio and reading this file. Peace!

Contact
- [LinkedIn]  `https://www.linkedin.com/in/kristofgal`
- [Email]     `info@galkristof.eu`
- [Github]    `https://github.com/GalKristof`