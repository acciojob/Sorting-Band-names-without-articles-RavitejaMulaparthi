//your code here

let touristSpots = ['The Virupaksha Temple', 'A Victoria Memorial', 'The Tajmahal', 'The Amarnath Temple','An Okhla Market'];
let arr = [];
let map = {};
let result = [];
for (let i of touristSpots) {
	let tempArr = i.split(' ');
	let tempStr = '';
	for (let j of tempArr) {
		let tempword = j.toLowerCase();
		if(tempword !== 'the' && tempword !== 'an' && tempword !== 'a')
		{
			tempStr += j;
		}
	}
	arr.push(tempStr);
	map[tempStr] = i;
}
arr.sort();
for (let i of arr) {
result.push(map[i])
}
return result;
// console.log(result);