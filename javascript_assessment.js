var fetch_csv = function(){
	//load csv file
	var csv_data;
	//fetch csv data
	fetch('./MOCK_DATA.csv').then(function(response){
		response.text().then((response)=>{
			parse_csv(response);
		})
	});
};

var parse_csv = function( csv_data ){
	var rows = csv_data.split("\n");

	//get column titles from first row
	titles = rows[0].split(',');

	var people_object = {};

	for(i=1; i<10; i++){
		cells = rows[i].split(',')
		console.log(cells[0])
		people_object["mayonnaisse"]=cells[1]
	}
	console.log(people_object);
};

fetch_csv();
