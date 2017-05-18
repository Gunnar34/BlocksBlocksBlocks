$(onReady);

function onReady(){
  console.log('JS is loaded');

$('#buttonOne').on('click', addBox);
$('main').on('click', '#box', blackBox);
$('main').on('click', '#buttonX', removeBox);
$('#buttonTwo').on('click', clearAll);

//Creates a new box with a random color
$('#buttonOne').click(function(){
  randomNumber(1, 7);
  randomColor(mathNumber);
  randomFont(mathNumber);
  $('#buttonOne').css('background-color', color);
  $('p').css('font-family', font);

});
//random color assignment to already created buttons
$('#buttonThree').click(function(){
  randomNumber(1, 7);
  randomColor(mathNumber);
  randomFont(mathNumber);
  $('#buttonThree').css('background-color', color);
      var x = randomNumber(0, 10);
      randomColor(randomNumber(1, 7));
      $('.' + x).css('background-color', color);

});
//clear all created blocks
$('#buttonTwo').click(function(){
  randomNumber(1, 7);
  randomColor(mathNumber);
  randomFont(mathNumber);
  $('#buttonTwo').css('background-color', color);

});
}
//add box
function addBox(){
  var $divBox = $('<div>' + '<button id="buttonX">X</button>' + '</div>');
  console.log('new box');
  $divBox.attr('id', 'box');
  $('#divOne').append($divBox);
  randomNumber(1, 7);
  randomColor(mathNumber);
  $divBox.css('background-color', color );
        var y = randomNumber(0, 10);
        $divBox.attr('class', y);

}
//turn box black
function blackBox(){
  console.log('box clicked');
  $(this).css('background-color', 'black');
}
//make random number
var mathNumber;
function randomNumber(min, max){
    return mathNumber = Math.floor(Math.random() * (1 + max - min) + min);
}

//change color
var color = '';
function randomColor(number){
  switch (number) {
    case 1:
      color = 'red';
      break;
    case 2:
      color = 'orange';
      break;
    case 3:
      color = 'yellow';
      break;
    case 4:
      color = 'green';
      break;
    case 5:
      color = 'blue';
      break;
    case 6:
      color = 'indigo';
      break;
    case 7:
      color = 'violet';
  }
}
//change font
var font = '';
function randomFont(number){
  console.log('font change');
  switch (number) {
    case 1:
      font = 'Futura';
      break;
    case 2:
      font = 'Helvetica';
      break;
    case 3:
      font = 'Chalkboard';
      break;
    case 4:
      font = 'Courier';
      break;
    case 5:
      font = 'Monaco';
      break;
    case 6:
      font = 'fantasy';
      break;
    case 7:
      font = 'Georgia';
  }
  console.log(font);
}
//remove box
function removeBox() {
  $(this).parent().fadeOut('slow');
}
function clearAll(){
  var $div = $('<div id="divOne"></div>');
  $('#divOne').remove();
  $('main').append($div);
}
function resetClass(){
  var $divBox = $('<div>' + '<button id="buttonX">X</button>' + '</div>');
  var z = randomNumber(0, 10);
  $divBox.attr('class', z);
  console.log('did i work?');
}
