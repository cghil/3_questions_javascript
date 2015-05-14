//check if item is an array or a number
// if it is an array the go through that
var numberArray = [];

function getNumbers(array){
	array.forEach(function(element, index){
		if (element instanceof Array && element.length === 0){
			array.splice(index, 1);
		} else {
			if (isNumber(element)){
				numberArray.push(element);
			} else if ( element instanceof Array) {
				if (array.length >= 1) {
					getNumbers(element);
				}
			}
		}
	})
	return numberArray
}

function isNumber(item){
	return !isNaN(item)
}


function average(inputArray){
	var length = inputArray.length;
	var sum = 0;
	inputArray.forEach(function(element){
		sum += element
	})
	return sum/length
}

var exampleArr = [ 1, 3, 5, [2, 8, -14, 'abc', [1, 1, 5, []]]]


function averageOfTraversal(array){
	var arrayOfNums = getNumbers(array);
	console.log(arrayOfNums)
	var output = average(arrayOfNums);
	console.log(output)
	return output
}

averageOfTraversal(exampleArr);