
	var url = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=4d9ab07f58eff5a947a7e87e27cf4627&targetDt=20190501";
	
	$(function(){
		
		$.ajax({ //객체리터럴로 인수 전달
			type:"GET",
			url:url,
			dataType:"json",
			success:jsonParser
		});
		function jsonParser(data){
			var showList=data.boxOfficeResult.dailyBoxOfficeList;
				$(showList).each(function(idx,item){
					document.write("<h2>" + item.rank+ "," + item.movieNm + "</h2>")
				});
		}

	})
