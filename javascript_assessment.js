var fetch_csv = function(){
	//load csv file
	var csv_data
	//fetch csv data
	fetch('./MOCK_DATA.csv').then(function(response){
		response.text().then((response)=>{
			parse_csv(response)
		})
	})
}

var parse_csv = function( csv_data ){
	var rows = csv_data.split("\n")

	for( row in rows){
		rows[row].split(",")
	}
}

fetch_csv()
