//the navbar
var Mynav = /** @class */ (function () {
    function Mynav() {
        this.template = "<nav>\n                    <ul class=\"nav nav-pills\">\n                    <li ><button onclick=\"showEvents()\">Events</button></li>\n                    <li ><button onclick=\"showPlaces()\">Places</button></li>\n                    <li class=\"dropdown\">\n                    <button class=\"dropdown-toggle\" id=\"Restaurants\" data-toggle=\"dropdown\" \n                            aria-haspopup=\"true\" aria-expanded=\"true\">Restaurants</button>\n                    <div class=\"dropdown-menu\" aria-labelledby=\"Restaurants\">\n                         <p onclick=\"showRestaurants('all')\">all</p>\n                         <p onclick=\"showRestaurants('Asian')\">Asian</p>\n                         <p onclick=\"showRestaurants('Viennesse')\">Viennesse</p>\n                         <p onclick=\"showRestaurants('Italian')\">Italian</p>\n                         <p onclick=\"showRestaurants('Indian')\">Indian</p>\n                    </div>          \n                    </li>\n                    <li class=\"dropdown\">\n                    <button class=\"dropdown-toggle\" id=\"More\" data-toggle=\"dropdown\" \n                            aria-haspopup=\"true\" aria-expanded=\"true\">&equiv;</button>\n                    <div class=\"dropdown-menu\" aria-labelledby=\"More\">\n                         <p onclick=\"addEntry()\">Add Entry</p>\n                         <p onclick=\"saveData()\">Save</p>\n                         <p onclick=\"loadData()\">Load</p>\n                         \n                    </div> \n                    </li>\n                    </ul>\n                  </nav>";
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
            var place = new Locations(e.name, e.address, e.picture, e.created);
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
            var place = new Restaurants(e.name, e.address, e.picture, e.created, e.phone, e.category, e.weburl);
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
            var place = new Events(e.name, e.address, e.picture, e.created, e.date, e.price, e.weburl);
            console.log(e.name);
            $('#data').append(place.render());
        }
    });
    if ($('#data').html() == "") {
        $('output').text('currently nothing matching found');
    }
}
function addEntry() {
    var template = "<h2>Add Entry Form</h2>\n               <p><select>\n                 <option value=\"place\">Place</option>\n                 <option value=\"event\">Event</option>\n                 <option value=\"restaurant\">Restaurant</option>\n               </select></p>\n               <p><input type=\"text\" placeholder=\"Name\"/></p>\n               <p><input type=\"text\" placeholder=\"Address\"/></p>\n               <p><span>Image : <input type=\"file\" style=\"display:inline;\"/></span></p>\n               <div id=\"AdditionalInfo\"></div>\n               <p><input type=\"text\" value=\"" + Date().toString() + "\"/></p>\n               <p><button onclick=\"addEntryData()\">Add</button></p>\n              ";
    $('output').remove();
    $('blog').append("<output><div id='addEntryForm'></div></output>");
    $('#addEntryForm').append(template);
}
function addEntryData() {
    alert("data not added");
}
function saveData() {
    console.log('data saved');
    localStorage.setItem('travelomaticblog', JSON.stringify(myData));
    $('output').text('data has been saved');
}
function loadData() {
    var cat = localStorage.getItem('travelomaticblog');
    if (cat === undefined) {
        $('output').text('stored data could not be found');
    }
    else {
        myData = JSON.parse(cat);
        $('output').text('stored data has been loaded');
        console.log('data loaded');
    }
}
