# paper-scissors-rock

## Description 

Vanilla Javascript based web game mini-project, will a heavy focus on applying DOM references between game logic and UI elements on the webpage to make
paper-scissors-rock work and look pretty at the same time!

## Content

HTML: to provide an interface for users while playing the game

Javascript: responsible for all the game's logic

## Progression

22/02/2023 - Creating the game
* Basic html boilerplate established 
* Javascript functions implemented for player choice, bot choice, events per round and entire game points

Plans for improvement:
* Refactoring of functions is essential as varaible and expression repetition is at all time high!
* validation check of the input (check if null || undefined || unrelated answer) to leave the loop earlier (save time and RAM)
* simple html and css webpage interface needed (will need to revisit DOM manipulation)

## UPDATE 

27/02/2023 - Implementing UI (HTML and CSS)
* Git: branch off from main repo to work on UI of the webgame.
* HTML: header, body and footer div implemented for flex containers and items utilisation during styling.
* CSS: Minimalistic retro styling for the UI page layout, these included change of fonts to 8bit style, background color and general placements of all HTML elements on the page.
* JS: DOM reference used on body div via onclick() eventlistener to trigger display of results in representing a single round of the game.

Plans for improvement:
* Update required on UI design of the results (currently only a text indicating if you have won or loss the round)
* Will need to implement a counter logic in JS to portray a complete game of paper-scissors-rock, best round of 5.


## LATEST UPDATE

6/03/2023 - Implementing a full game (HTML, CSS & JS)
* Git: merged ui-phase branch into origin main.
* HTML: restructured body-divs container of the result portion of the game to now display image of user and bot choice and text of winner + score count.
* CSS: structured result portion with flex to blend in with the general minimalistic design of the webpage.
* JS: Implemented a full best of 5 game round via the use of IF-ELSE statements and more DOM reference to body-result-grid.

Plans for improvement: Will be mostly css
* Implement a dynamic float animation when user hover over the choice images.
* When user select a choice, the page should automatically go down to the outcome section.
* Have an option represented by an 'up-arrow' to allow users to go back up of the page to the selection grid.
