var Locations = /** @class */ (function () {
    function Locations(Name, Address, Picture) {
        var Id = Math.floor(Math.random() * Math.pow(2, 128)).toString(16);
        this.name = Name;
        this.address = Address;
        this.picture = Picture;
        this.id = Id;
        this.template = "<h3>" + Name + "</h3>\n                 <img src=\"" + Picture + "\"/>\n                 <p>" + Address + "</p> \n                ";
        this.wrapper = "<div id=\"place" + Id + "\" class=\"col-lg-3 col-md-6 col-sm-12 place\">";
    }
    Locations.prototype.render = function () {
        console.log(this.id);
        return this.wrapper + this.template + '</div>';
    };
    return Locations;
}());
