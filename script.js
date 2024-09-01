let userName = '';
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

let userQuestion = 'Will i become a programmer?'
console.log('Will i become a programmer?')

let randomNumber = Math.floor(Math.random()* 8);

let eightball = ''
switch(randomNumber) {
  
  case 1:
  console.log('It is certain')
  break;
  case 2:
  console.log('it is decidely so')
  break;
  case 3:
  console.log('Reply hazy try again')
  break;
  case 4:
  console.log('Cannot predict now')
  break;
  case 5:
  console.log('Do not count on it')
  break;
  case 6:
  console.log('My sources say no')
  break;
  case 7:
  console.log('Outlook not so good')
  break;
  case 8:
  console.log('Signs point to yes')
  break;
   console.log(eightball)
  default:
  console.log('Invalid answer')
}