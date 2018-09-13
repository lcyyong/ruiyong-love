	function goMelaka(){
		var location="Melaka";
	}

	function goJb(){
		var location="Johor Bahru";
		
	}

	var map;
	var map2;
	function initMap() {
		map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: 2.260882, lng: 102.222104},
			zoom: 17
		});
		
		var marker = new google.maps.Marker({
            position: new google.maps.LatLng(2.260882, 102.222104),
            map: map
        });
		
		map2 = new google.maps.Map(document.getElementById('map2'), {
			center: {lat: 1.661325, lng: 103.5841725},
			zoom: 17
		});
		
		var marker2 = new google.maps.Marker({
            position: new google.maps.LatLng(1.661325, 103.5841725),
            map: map2
        });
	}
	
	// domReady
    $(function() {
        //$('html').sakura();
		$("body").sakura();
    });

    // windowLoad
    //$(window).load(function() {
    //    $('html').sakura();
    //});
	
	