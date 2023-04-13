# Roll-the-dice
 This is a 2 Player Dice game. 
 
 Inspiered from the Anglea Yu's Course on Complete Web Developement.

---
### New Features:
New features include-
- Roll button is added.
- The page when loaded for the first time gives the html page only and the js functionalties work only after rollling the dice.
(In the old version, the js functionalities would work even when the page was loaded for the first time as there was no roll button and the js code would run everytime the page was loaded or refreshed.)
---
#### Code is improved by adding:
#### myfunction() includes the main code
```js
    function reloadP() {
        sessionStorage.setItem("reloading", "true");
        document.location.reload();
    }
    
    window.onload = function() {
        var reloading = sessionStorage.getItem("reloading");
        if (reloading) {
            sessionStorage.removeItem("reloading");
            myFunction();
        }
```
---
### Contributing guidelines:
Create a PR when-
- fucntionality and UI of game is modified and improved.
- documentation is improved.
