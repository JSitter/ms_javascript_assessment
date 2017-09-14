
var userData = {};

var fetch_csv = function(){
	//load csv file
	var csv_data;
	//fetch csv data
	fetch('./MOCK_DATA.csv').then(function(response){
		response.text().then((response)=>{
			userData = parse_csv(response);
			console.log(userData)
		});
	});
};

var parse_csv = function( csv_data ) {
	var rows = csv_data.split("\n");

	//get column titles from first row
	var titles = rows[0].split(',');

	var people_object = {};

	for(var i = 1; i < rows.length; i++) {
		cells = rows[i].split(',');
		var person_obj = {};
		for( cell in cells ){
			person_obj[titles[cell]] = cells[cell];
		};
		let id = person_obj.id.toString();
		people_object[id] = person_obj;

	};

	return people_object;
};

fetch_csv();
