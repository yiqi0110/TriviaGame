// Trivia javascript
// hides all sections
$('#questionSection').hide();
$('#rightAnswerIntermission').hide();
$('#wrongAnswerIntermission').hide();
$('#resultPage').hide();

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
    a2: "The Oda clan",
    a3: "The Mitsubishi clan",
    answer: {
        a: "The Shimada clan",
    }
};
var savedGenjiQ = {
    question: "Who saved Genji after his assassination attempt?",
    a1: "Zenyatta",
    a2: "Gabriel Reyes",
    a3: "Junk Rat",
    answer: "Mercy"
};
var omnicStandardQ = {
    question: "What was the omnic's standard soilder unit during the omnic crisis?",
    a1: "Terminator Units",
    a2: "R2-D2 units",
    a3: "Meka units",
    answer: "Bastion units"
};
var creationOWQ = {
    question: "Why was OverWatch created?",
    a1: "To solve world hunger",
    a2: "To stop WW2",
    a3: "To organize heros from around the world",
    answer: "To combat the omnic crisis"
};
var soilder76NameQ = {
    question: "What is soilder 76's real name?",
    a1: "Hanzo Shimada",
    a2: "Gabriel Reyes",
    a3: "Ji Jung Soo",
    answer: "Jack Morrison"
};
var mercyNameQ = {
    question: "What is Angela Ziegler alias?",
    a1: "D.V.A.",
    a2: "Widow Maker",
    a3: "Orisa",
    answer: "Mercy"
};
var specOpsUnitQ = {
    question: "What covert special operations unit was Gabriel Reyes given charge of after the omnic crisis?",
    a1: "Black Special Operation Unit",
    a2: "Reaper Special Operation Unit",
    a3: "Misfits Special Operation Unit",
    answer: "Black Watch Special Operation Unit"
};
var hardlightQ = {
    question: "What country created Hardlight?",
    a1: "Japan",
    a2: "China",
    a3: "South Korea",
    answer: "India"
};
var gamer2PlayerQ = {
    question: "Which game made D.V.A. a perfect candidate for South Korea's MEKA unit?",
    a1: "Galaxica",
    a2: "Mrs. Pacman",
    a3: "League of Legends",
    answer: "StarCraft"
};
// thinking about having the displayed answers in a array so i can shuffle them . . .
var subject28Q = {
    question: "What subject number was Winston while he was on the lunar base?",
    a1: "subject 13",
    a2: "subject 372",
    a3: "subject 10033",
    answer: "subject 28"
};

// Pushing all question objects to an array
questionObjectsArray.push(genjiClanQ, savedGenjiQ, omnicStandardQ, creationOWQ, soilder76NameQ, mercyNameQ, specOpsUnitQ, hardlightQ, gamer2PlayerQ, subject28Q);
console.log(questionObjectsArray);

// I am using this function from the internet
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

// randomizing the array
shuffle(questionObjectsArray);

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
var startGame = function () {
    $('#startScreen').hide();
    $('#rightAnswerIntermission').hide();
    $('#wrongAnswerIntermission').hide();
    questionObjects(questionObjectsArray[0]);
};
// console.log(indexInUse);

// click function to 'start game'
$('#startGame').click(function () {
    startGame();
});

// create a function that runs through the question objects while filling in a question into the question argument
var questionObjects = function (questionNumber) {
    // should shuffle which one is the answer using the shuffle function
    var test = test;
    var x = questionNumber;
    var questionShuffle = [x.a1, x.a2, x.a3, x.answer]
    shuffle(questionShuffle);
    $('#questionSection').show();
    $('strong#questionSpan').text(x.question);
    $('button#answer0').text(shuffle(questionShuffle[0]));
    console.log('1232');
    $('button#answer1').text(shuffle(questionShuffle[1]));
    console.log('1545');
    $('button#answer2').text(shuffle(questionShuffle[2]));
    console.log('1656');
    $('button#answer3').text(shuffle(questionShuffle[3]));
    console.log('1989');
};

$('button').on('click', function (event) {
    event.preventDefault();
    var userInput = $(this).text();
    console.log(userInput);
    for (var i = 0; i < questionObjectsArray.length; i++) {
        if (userInput == questionObjectsArray[0].answer) {
            console.log('this');
            questionObjectsArray.shift();
            rightAnswerIntermission();
            console.log(questionObjectsArray);
            return true;
        } else {
            console.log('that');
            wrongAnswerIntermission(questionObjectsArray[0]);
            questionObjectsArray.shift();
            console.log(questionObjectsArray);
            return false;
        }
        // if ($(a).text() == trivia[n].correct) {
        //     $(".game").hide();
        //     $(".timer").hide();
        //     $(".rightanswer").show();
        //     n++;
        //     if (n > 4) {
        //         hideall();
        //         $(".win").show();
        //         $(".volts").text(v);
        //         $(".retake").show();
        //     } else {
        //         fill(trivia[n]);
        //     }
        // } else {
        //     $(".game").hide();
        //     $(".timer").hide();
        //     $(".wronganswer").show();
        //     v++;
        // };
    }
});

// answer on click function
// I think it would be better to have a on click function to use several times but im not sure how to so we wait

// right intermission function
var rightAnswerIntermission = function () {
    $('#questionSection').hide();
    $('#rightAnswerIntermission').show();
    interval4Intermission = setTimeout(startGame(), 5000);
};

// wrong intermission function
var wrongAnswerIntermission = function (question) {
    var x = question;
    $('#questionSection').hide();
    $('#wrongAnswerIntermission').text("Sorry the right answer was " + x.answer + "!").show();
};


// Create a function the assosiates the answer with one of the coice answers
var assosiationAnswer = function (questionObjectsArray, val) {
    for (var i = 0; i < questionObjectsArray.length; i++) {
        for (var value in questionObjectsArray[i]) {
            if (questionObjectsArray[i][value] == val) {
                console.log(value + i);
                questionObjects(questionObjectsArray[i]);
                // then run function for right answer
                return;
            }
        }
    }
    return false;
};
// assosiationAnswer(questionObjectsArray, 'subject 28');

// create a function for right clicks on the 'question page'

// Tim Lewis [6:27 PM]      Code to think about for right answer stuff
// if ($(a).text() == trivia[n].correct) {
//     $(".game").hide();
//     $(".timer").hide();
//     $(".rightanswer").show();
//     n++;
//     if (n > 4) {
//         hideall();
//         $(".win").show();
//         $(".volts").text(v);
//         $(".retake").show();
//     } else {
//         fill(trivia[n]);
//     }
// } else {
//     $(".game").hide();
//     $(".timer").hide();
//     $(".wronganswer").show();
//     v++;
// };