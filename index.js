let arr = ['foo', 'bar', 10, 'qux'];

const itemToReplace = 'qux';
const indexItem = arr.indexOf(itemToReplace);

if (indexItem > -1) {
	arr.splice(indexItem, 1, "I'm being inserted!");
	console.log(arr);
} else {
	console.log(`${itemToReplace} does not exist!`);
}
