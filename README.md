#memory game project

##project overview

   A memory game and the  player can chose from four styles of the game card
   using fetch api the gap the desired data from `.json` file.
   an object is created for containing all player data including the chosed theme html
    data is down and  using event delegation the clicked items save on an array which get 
    cleared after calling a function to run the test this enable faster gaming  expirince 
    as player can click all the cards once _if it is possible_ and only the matched items will
    pass the test a player have **8 tries** before the rat starts gaging a chaise to know the cards   
       
##tabel of content
* [html](#1-html)
* [css](#2-css)
* [javaScript](#3-js)
* [json](#4-json)
* [known buggs](#5-bugs)
* [toDos](#6-todo)
* [credits](#7-credits)

### 1.html
using font-awsome for icons ,googlefonts and animate.css

    <link rel="stylesheet prefetch" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css">
    <link rel="stylesheet prefetch" href="css/animate.css">
    <link rel="stylesheet prefetch" href="https://fonts.googleapis.com/css?family=Coda">
the first thing to show is the game starting panel to write the player name 
and chose the game theme it is removed from the dom after fetching the `.json` file.

the game starts and can be restarted,after the player manages to match all cards 
a panel appears with  the game rate
### 2.css
the game css is generated with **sass** 

### 3.js
Mostly es6 expect `async` and `await` for es7 with fetch api
i trie to use a module pattern but the code got longer but it easier to modify,maintain 
and to add new features 
### 3.json
there is two`.json` one for relative url and another for absolute urls
### 5.bugs
~~starts rate has now space in bettwen~~ __fixed__

`star.innerHTML = "<i class=\"fa fa-star\"></i>";` added spaces

if the player clicked a card and reset the level the game tries to match

### 6.todo
-fixing bugs

-add local storage support

## 7.credits
 -[fontawesome](https://fontawesome.com/)
   
 -[animate.css](https://daneden.github.io/animate.css/)
        
 -[flat icons](https://www.flaticon.com/)



 


