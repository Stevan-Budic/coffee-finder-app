


$(function() {
    var lat = "";
    var lng = "";
    var appendeddatahtml = "";
    var arguments = "";
    var str = "";
    var newstr = "";
    var phone = "";
    var rating = "";
    var icon = "";
    var address = "";
    var distance = "";
    var id = "";
    

    
    $("#searchform").submit(function(event){
        event.preventDefault();
        if (!lat) {
            navigator.geolocation.getCurrentPosition(getLocation);
        } else {
            getVenues();
        }
    });
    
    function getLocation(location) {
        lat = location.coords.latitude;
        lng = location.coords.longitude;
        getVenues();
    }
    
    function getVenues() {
        $.ajax({
            type: "GET",
            url: "https://api.foursquare.com/v2/venues/explore?ll="+lat+","+lng+"&limit=10&intent=checkin&radius=1000&categoryId=4bf58dd8d48988d1e0931735&&client_id=1ADWW15EFMWQGO2D14A3L3VOKZMIMK0VISMNHSX2WHFMMQMC&client_secret=X2QWPXWTAC2Q4LMEOKOZKTXUGZ3BYJTOMJMPGEQYYI10QUZ5&v=20130619",
            success: function(data) {
                $("#venues").show();
                var dataobj = data.response.groups[0].items;
                $("#venues").html("");
                
                // Rebuild the map using data.
                var myOptions = {
                    zoom:15,
                    center: new google.maps.LatLng(lat,lng),
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    scrollwheel: false
                },
                map = new google.maps.Map(document.getElementById('map'), myOptions);
                
                // Build markers and elements for venues returned.
                $.each( dataobj, function() {
                    
                    if (this.venue.contact.formattedPhone) {
                        phone = "Phone: "+this.venue.contact.formattedPhone;
                    } else {
                        phone = "";
                    }

                    if (this.venue.location.distance) {
                        distance = "<strong>Distance: </strong>"+this.venue.location.distance;
                    } else {
                        distance = "";
                    }
                    
                    if (this.venue.location.address) {
                        address = '<p class="subinfo">'+
                                    this.venue.location.address+
                                    '<br>'+
                                    this.venue.location.city+'<br>';
                    } else {
                        address = "";
                    }
                    
                    if (this.venue.rating) {
                        rating = '<span class="rating">'+this.venue.rating+'</span>';
                    }
                    
                    appendeddatahtml = '<div class="venue"><h2><span>'+
                                        this.venue.name+
                                        rating+
                                        '</span></h2>'+address+phone+
                                        '</p><p><strong>Total Checkins:</strong> '+
                                        this.venue.stats.checkinsCount+'</p>'+
                                        '</p>'+distance+'m'+'</p>'+
                                        '</div>';
                    $("#venues").append(appendeddatahtml);


                    id = this.venue.id;
                    console.log(id);
                    
                    // Build markers
                    var markerImage = {
                        url: 'https://www.dropbox.com/s/zoe8hsqknbk6gxi/pin2.png?raw=1',
                        scaledSize: new google.maps.Size(24, 24),
                        origin: new google.maps.Point(0,0),
                        anchor: new google.maps.Point(24/2, 24)
                    },
                    markerOptions = {
                        map: map,
                        position: new google.maps.LatLng(this.venue.location.lat, this.venue.location.lng),
                        title: this.venue.name,
                        animation: google.maps.Animation.DROP,
                        icon: markerImage,
                        optimized: false
                    },
                    marker = new google.maps.Marker(markerOptions)
                    
                });
            }
        });
    }
    
    function mapbuild() {
        $("#venues").hide();
        var myOptions = {
            zoom:6,
            center: new google.maps.LatLng(45.242504,19.820474),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false
        },
        map = new google.maps.Map(document.getElementById('map'), myOptions);

    }
    
    mapbuild();
});

