
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

	//iterate through rows and split cells
	for(var i = 1; i < 10; i++) {
		cells = rows[i].split(',');
		var person_obj = {};

		//iterate through cells and format numbers and create person_obj
		for( cell in cells ){
			if(titles[cell] == "age"){
				person_obj[titles[cell]] = parseInt(cells[cell]);

			} else if(titles[cell] == "rating"){
				person_obj[titles[cell]] = parseFloat(cells[cell]);

			} else if(titles[cell] == "date"){
				date_obj = new Date(cells[cell] * 1000);
				person_obj[titles[cell]] = date_obj.toUTCString();

			} else if(titles[cell] == "id"){
				person_obj[titles[cell]] = parseInt(cells[cell]);
			}else{
				person_obj[titles[cell]] = cells[cell];
			}
		};

		//push person_obj to people_object
		let id = person_obj.id.toString();
		people_object[id] = person_obj;

	};

	return people_object;
};

fetch_csv();
