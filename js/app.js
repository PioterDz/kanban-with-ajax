var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
  'X-Client-Id': '3959',
  'X-Auth-Token': '6a532014e4790a933feb33e82e234ed3'
};
var prefix = "https://cors-anywhere.herokuapp.com/";


fetch(prefix + baseUrl + '/board', { headers: myHeaders, cache: 'no-store' })
    .then(function(resp) {
        return resp.json();
    })
    .then(function(resp) {
        setupColumns(resp.columns);
    });

function setupColumns(columns) {
    columns.forEach(function(column) {
        var col = new Column(column.id, column.name);
        board.addColumn(col);
        setupCards(col, column.cards);
    });
}

function setupCards(col, cards) {
    cards.forEach(function (card) {
        var cardObj = new Card(card.id, card.name);
        col.addCard(cardObj);
    })
}

// Ostatnim elementem jest dodanie karty do kolumny za pomocą metody createCard(), którą tworzyliśmy w module 11 (można ją znaleźć w pliku Column.js).


// OGÓLNA FUNKCJA
// function randomString() {
// 	var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ'.split();
// 	var str = '', i;
// 	for (i = 0; i < 10; i++) {
// 	  str += chars[Math.floor(Math.random() * chars.length)];
// 	}
// 	return str;
// }

function generateTemplate(name, data, basicElement) {
  	var template = document.getElementById(name).innerHTML;
  	var element = document.createElement(basicElement || 'div');
  
  	Mustache.parse(template);
  	element.innerHTML = Mustache.render(template, data);
  
  	return element;
}

// // TWORZENIE NOWYCH EGZEMPLARZY KOLUMN
// var todoColumn = new Column('Do zrobienia');
// var doingColumn = new Column('W trakcie');
// var doneColumn = new Column('Skończone');

// // DODAWANIE KOLUMN DO TABLICY
// board.createColumn(todoColumn);
// board.createColumn(doingColumn);
// board.createColumn(doneColumn);

// // TWORZENIE NOWYCH EGZEMPLARZY KART
// var card1 = new Card('Nowe zadanie');
// var card2 = new Card('stworzyc tablice kanban');

// // DODAWANIE KART DO KOLUMN
// todoColumn.createCard(card1);
// doingColumn.createCard(card2);