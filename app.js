const animes = require('./database');

// require input
const readline = require('readline-sync');
const firstInput = readline.question('Do you want to search an anime?Y/N ');

/*If yes, show the category available and asks what category he wants
If not, show all the animes in crescent order from the year launched*/
if (firstInput.toLocaleUpperCase() === 'Y'){
    console.log('This are the category available: ');
    console.log(['Action, Adventures, Demons, Love']);

    const inputCategory = readline.question('Wich category you chose? ');
    const return1 = animes.filter(anime => anime.category === inputCategory);

    console.table(return1);
} else if (firstInput.toLocaleUpperCase() === 'N') {
    const animesByYear = animes.sort((a,b) => a.year  - b.year);
    console.log('This are all animes in my DB: ');
    console.table(animesByYear);
} else {
    console.log("Invalid Input");
}
