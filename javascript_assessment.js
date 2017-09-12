var parse_csv = function(){
	//load csv file
	var csv_data
	fetch('./MOCK_DATA.csv').then(function(response){
		response.text().then((response)=>{

			console.log(response)
		})
	})

}

parse_csv()
