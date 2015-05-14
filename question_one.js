// 1. Write a function that accepts an array and 
// returns a new array containing only the elements 
// with a numerical id and a path that ends in .txt,
//  sorted in by their id (numerically descending).


function txt_files_please(array){
	var only_text_files = [];
	array.forEach(function(item){
		var path = item.path
		var txt = new RegExp(".*\.txt$");
		if (txt.test(path)){
			only_text_files.push(item);
		}
	})
	return only_text_files
}


function id_numbers_please(array){
	var ids = [];
	array.forEach(function(item){
		var id = item.id
		if(!isNaN(id)){
			ids.push(id)
		}
	})
	var sorted_ids = ids.sort(function(a, b){
		return a-b;
	});
	var sorted_array = [];
	sorted_ids.forEach(function(id){
		array.forEach(function(item){
			if (id=== item.id){
				sorted_array.push(item)
			}
		})
	})
	return sorted_array
}

var input_arr = [
	{id: 15, path: 'foo.txt'},
	{id: -1, path: 'bar.1.txt'},
	{id: 'undefined', path: null},
	{id: 3, path: 'mine.txt'},
	{id: 12.2, path: 'yours.txt.diff'}
];

var output = sort_objects_with_txt_files(input_arr);
console.log(output);


