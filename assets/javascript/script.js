// Trivia javascript
// hides all sections
$('#questionSection').hide();
$('#rightAnswerIntermission').hide();
$('#wrongAnswerIntermission').hide();

// Contemplating having a function for randomized questions...
// Shows the background for and slowly shows the jumbotron
$('.jumbotron').hide();
$('.jumbotron').fadeIn(3000, function () {
    $('.jumbotron').show();
});

// set global variables
var roundsWon = 0;
var roundsLost = 0;
var interval4RoundTime;
var interval4GameTime;
var interval4Intermission;
var questionObjectsArray = [];

// creating all the objects for each question
// I was going to have it put into the array initially but I think it'll be cleaner looking code this way, and since it's not a big file it shouldn't cause any latancy issues.
var genjiClanQ = {
    question: "To what clan does Genji belong to?",
    a1: "The Uramaki clan",
    a2: "The Shimada clan",
    a3: "The Oda clan",
    a4: "The Mitsubishi clan", 
};
var savedGenjiQ = {
    question: "Who saved Genji after his assassination attempt?",
    a1: "Mercy",
    a2: "Zenyatta",
    a3: "Gabriel Reyes",
    a4: "Junk Rat", 
};
var omnicStandardQ = {
    question: "What was the omnic's standard soilder unit during the omnic crisis?",
    a1: "Bastion units",
    a2: "Terminator Units",
    a3: "R2-D2 units",
    a4: "Meka units", 
};
var creationOWQ = {
    question: "Why was OverWatch created?",
    a1: "To solve world hunger",
    a2: "To combat the omnic crisis",
    a3: "To stop WW2",
    a4: "To organize heros from around the world", 
};
var soilder76NameQ = {
    question: "What is soilder 76's real name?",
    a1: "Hanzo Shimada",
    a2: "Gabriel Reyes",
    a3: "Jack Morrison",
    a4: "Ji Joon Song", 
};
var mercyNameQ = {
    question: "What is Angela Ziegler alias?",
    a1: "D.V.A.",
    a2: "Widow Maker",
    a3: "Orisa",
    a4: "Mercy", 
};
var specOpsUnitQ = {
    question: "What covert special operations unit was Gabriel Reyes given charge of after the omnic crisis?",
    a1: "Black Special Operation Unit",
    a2: "Reaper Special Operation Unit",
    a3: "Misfits Special Operation Unit",
    a4: "Black Watch Special Operation Unit", 
};
var hardlightQ = {
    question: "What country created Hardlight?",
    a1: "India",
    a2: "China",
    a3: "South Korea",
    a4: "Japan", 
};
var gamer2PlayerQ = {
    question: "Which game made D.V.A. a perfect candidate for South Korea's MEKA unit?",
    a1: "Galaxica",
    a2: "Mrs. Pacman",
    a3: "StarCraft",
    a4: "League of Legends", 
};
var subject28Q = {
    question: "What subject number was Winston while he was on the lunar base?",
    a1: "subject 28",
    a2: "subject 372",
    a3: "subject 10033",
    a4: "subject 13", 
};
questionObjectsArray.push(genjiClanQ, savedGenjiQ, omnicStandardQ, creationOWQ, soilder76NameQ, mercyNameQ, specOpsUnitQ, hardlightQ, gamer2PlayerQ, subject28Q);

// create a reset function
var reset = function () {
    var roundsWon = 0;
    var roundsLost = 0;
    var interval4RoundTime;
    var interval4GameTime;
    var interval4Intermission;
    var questionObjectsArray = [];
};


// create a startGame function
var startGame = function() {
    $('#startScreen').hide();

};

// create a function that runs through the question objects
var questionObjects = function() {
    $('#questionSection').show();

};