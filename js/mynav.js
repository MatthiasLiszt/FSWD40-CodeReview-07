//the navbar
var Mynav = /** @class */ (function () {
    function Mynav() {
        this.template = "<nav>\n                    <ul class=\"nav nav-pills\">\n                    <li >Events</li>\n                    <li >Restaurants</li>\n                    <li onclick=\"showPlaces()\">Places</li>\n                    </ul>\n                  </nav>";
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
        var place = new Locations(e.name, e.address, e.picture);
        console.log(e.name);
        $('#data').append(place.render());
    });
}
