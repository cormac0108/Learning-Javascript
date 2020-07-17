// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
// let usernameshout = []

// const array2 = array.username.forEach((thing)  => {
//   usernameshout.push(username + "!")
// })

let newArray = []
array.forEach(user => {
	let { username } = user;
	username = username + "!";
	newArray.push(username);
})
console.log(newArray);


//Create an array using map that has all the usernames with a "? to each of the usernames

// const mapArray = array.map((user) => {
//   let {username} = user;
//   return username + "?";
// })

// console.log( "map",mapArray)

const mapArray = array.map(user => {
	let { username } = user;
	return username + "?";
})
console.log(mapArray);


//Filter the array to only include users who are on team: red

// my attempt
const filterArray = array.filter((user) => {
     return {team} === "red";
 });

//  Andrei's
 const filterArray = array.filter(user => {
	return user.team === "red";
})
console.log(filterArray);

//Find out the total score of all users using reduce

// my attempt
const reducedArray = array.reduce((acc, user) => {
  return acc + user.score
}, 0);

// andrei's
const total = array.reduce((acc, user) => {
	return acc + user.score
}, 0);
console.log(total);




// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	console.log(num, i);
	alert(num);
	return num * 2;
})

// my attempt : 1 index of the array  (2):
const newArray2 = arrayNum.map(num => num*2)

// Andrei's 
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	return num * 2;
})





//BONUS: create a new list with all user information, but add "!" to the end of each items they own.

const newList = []

const answer = array.map(user => {
	user.items = user.items.map(item => {
		return item + "!"
	});
	return user;
})
console.log(answer);

