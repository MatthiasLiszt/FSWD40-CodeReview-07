//the navbar
var Mynav = /** @class */ (function () {
    function Mynav() {
        this.template = "<nav>\n                    <ul class=\"nav nav-pills\">\n                    <li ><button onclick=\"showEvents()\">Events</button></li>\n                    <li ><button onclick=\"showPlaces()\">Places</button></li>\n                    <li class=\"dropdown\">\n                    <button class=\"dropdown-toggle\" id=\"Restaurants\" data-toggle=\"dropdown\" \n                            aria-haspopup=\"true\" aria-expanded=\"true\">Restaurants</button>\n                    <div class=\"dropdown-menu\" aria-labelledby=\"Restaurants\">\n                         <p onclick=\"showRestaurants('all')\">all</p>\n                         <p onclick=\"showRestaurants('Asian')\">Asian</p>\n                         <p onclick=\"showRestaurants('Viennesse')\">Viennesse</p>\n                         <p onclick=\"showRestaurants('Italian')\">Italian</p>\n                    </div>          \n                    </li>\n                    <li><button>&equiv;</button></li>\n                    </ul>\n                  </nav>";
    }
    Mynav.prototype.render = function () {
        $('mynav').append(this.template);
    };
    return Mynav;
}());
function showPlaces() {
    console.log('showPlaces selected');
    $('output').remove();
    $('blog').append("<output><div class='row' id='data'></div></output>");
    myData.map(function (e) {
        if (e.kind == "place") {
            var place = new Locations(e.name, e.address, e.picture);
            console.log(e.name);
            $('#data').append(place.render());
        }
    });
    if ($('#data').html() == "") {
        $('output').text('currently nothing matching found');
    }
}
function showRestaurants(restrict) {
    console.log('showRestaurants selected');
    $('output').remove();
    $('blog').append("<output><div class='row' id='data'></div></output>");
    myData.map(function (e) {
        var Filter;
        if (restrict == "all") {
            Filter = true;
        }
        else {
            Filter = (e.category == restrict);
        }
        if ((e.kind == "restaurant") && Filter) {
            var place = new Restaurants(e.name, e.address, e.picture, e.phone, e.category, e.weburl);
            console.log(e.name);
            $('#data').append(place.render());
        }
    });
    if ($('#data').html() == "") {
        $('output').text('currently nothing matching found');
    }
}
function showEvents() {
    console.log('showEvents selected');
    $('output').remove();
    $('blog').append("<output><div class='row' id='data'></div></output>");
    myData.map(function (e) {
        if (e.kind == "event") {
            var place = new Events(e.name, e.address, e.picture, e.date, e.price, e.weburl);
            console.log(e.name);
            $('#data').append(place.render());
        }
    });
    if ($('#data').html() == "") {
        $('output').text('currently nothing matching found');
    }
}
