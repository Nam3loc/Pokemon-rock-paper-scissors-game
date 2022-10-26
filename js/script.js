// DOM Queries

// const startBtn = document.querySelector('button');
const gameContainer = document.querySelector('#game-container');
const startContainer = document.querySelector('#start-container');
const createContainer = document.querySelector('#create-container');

// Input Queries

const firstName = document.querySelector('#firstname');
const element = document.querySelector('#chosen-element');

// Player 1
const player1 = document.querySelector('#p1-name');
const player1Element = document.querySelector('#player-1-element');

// Player 2
const player2 = document.querySelector('#p2-name');
const player2Element = document.querySelector('#player-2-element');

// Battle Prompt
const prompt = document.querySelector('#battle-prompt');
const battleButton = document.querySelector('#battle-button');

// Class

class Player {
    constructor(name, element) {
        this.name = name;
        this.element = element;
    }
}

const game = {
    players: [],
    playerOneReady: false,
    start: function () {
        // startBtn.classList.toggle('hide');
        startContainer.classList.toggle('hide');
        gameContainer.classList.toggle('hide');
    },

    createPlayer: function (currentElement) {
        // need name and element
        // console.log('Creating player')

        console.log('actual element', currentElement);

        if (!this.playerOneReady) {
            this.players.push(new Player(firstName.value, currentElement));
            player1.textContent = firstName.value;
            console.log(this.players);
            player1Element.classList.toggle('hide');
            prompt.innerText = 'Player 2: Enter name and element';
            this.playerOneReady = true;
        } else {
            console.log("creating player two");
            this.players.push(new Player(firstName.value, currentElement));
            player2.textContent = firstName.value;
            // console.log(this.players);
            player2Element.classList.toggle('hide');
            prompt.innerText = 'Lets Battle!';
            createContainer.classList.toggle('hide');
            battleButton.classList.toggle('hide');
        }

        this.clearForm();
    },

    checkElement: function (evt) {
        evt.preventDefault();
        // console.log(element.value);

        // Edge Case
        const currentElement = element.value.toLowerCase();
        // console.log(currentElement);

        if (currentElement === 'water' || currentElement === 'fire' || currentElement === 'grass') {
            // alert('Element input has to be water, fire, or grass'); // This is bad for user experience in your game
            element.style.backgroundColor = 'white';
            this.createPlayer(currentElement);
        } else {
            console.log('error!')
            element.style.backgroundColor = '#fd5e53';
        }
    },

    clearForm: function () {
        firstName.value = '';
        element.value = '';
    },

    battle: function () {
        console.log("We are battling!", this.players);
        console.log("Player One", this.players[0]);
        console.log("Player One", this.players[1]);

        const p1 = this.players[0].element;
        const p1Name = this.players[0].name;

        const p2 = this.players[1].element;
        const p2Name = this.players[1].name;

        // Update element displays - only if your file names are lowercase and all .png files

        // if(p1.element === 'fire') {
        //     player1Element.src = `images/${p1.element}.png`;
        // } else if (p1.element === 'grass') {
        //     player1Element.src = `images/${p1.element}.png`;
        // } else if (p1.element === 'water') {
        //     player1Element.src = `images/${p1.element}.png`;
        // }

        // OR you can just do this

        player1Element.src = `images/${p1}.png`;
        player2Element.src = `images/${p2}.png`;

        if(p1 === 'fire' && p2 === 'grass'){
            prompt.innerText = `${p1Name} wins!`;
        } else if(p1 === 'grass' && p2 === 'water'){
            prompt.innerText = `${p1Name} wins!`;
        } else if(p1 === 'water' && p2 === 'fire'){
            prompt.innerText = `${p1Name} wins!`;
        } else if(p1 === p2){
            prompt.innerText = `Tie! Both of them die!`;
        } else {
            prompt.innerText = `${p2Name} wins!`;
        }
    }
}

// Event Listeners

// startBtn.addEventListener('click', () => {
//     // console.log("The game is about to start");
//     startBtn.classList.add('hide');
// })