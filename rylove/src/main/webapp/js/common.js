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
	
	var partnerName = [];
	// domReady
    $(function() {
        //$('html').sakura();
		$("body").sakura();
		
		var appendStr = "";
		
		$( "#partnersNo" ).change(function() {
			appendStr = "";
			currentPartnerNo = $("#partnersNo").val();
			for(i = 0; i<currentPartnerNo ; i++){
				var curPartName = "";
				
				if(partnerName.length > 0){
					if(partnerName[i] != ""){
						curPartName = partnerName[i];
					}
				}
				if(currentPartnerNo >= partnerName.length){
					for(z=0; z<=currentPartnerNo-partnerName.length ; z++){
						partnerName.push("");	
					}
				}
				appendStr += "<label class='label col-sm-6' for='pFullName"+i+"'>PARTNERS Name: </label>";
				appendStr += "<input type='text' id='pFullName"+i+"' name='pFullName"+i+"' placeholder='中文全名' value='"+curPartName+"' onchange='setPartnerName("+i+",this.value);'  class='partName input form-control col-sm-6'>";
			}
			console.log(partnerName);
			$('#partnerNameDiv').html(appendStr);
		});
		
    });
	
	function submitRsvp(){
		var myform = $('#rsvpForm');
		
		if(check()){
			$.post('/index', myform.serialize(), function(data) {
				
			});
		}
		
		/*$.getJSON('/index', function(data) {
			$('#result2').html("Hello 2, " + data.name);
		});
		
		$.post('/index', myform.serialize(), function(data) {
			alert("Thanks");
		});*/
	}
	var currentPartnerNo = 0;
	function check(){
		var isGotEmpty = false;
		$( ".partName" ).each(function() {
			if($(this).val() == ""){
				isGotEmpty = true;
			}
		});
		if(isGotEmpty){
			alert("One of the Partner name is empty!");
			return false;
		}
		return true;
	}
	
	function setPartnerName(no, value){
		partnerName[no] = value;
	}
	