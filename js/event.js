var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(Name, Address, Picture, Created, Time, Price, WebUrl) {
        var _this = _super.call(this, Name, Address, Picture, Created) || this;
        _this.time = Time;
        _this.price = Price;
        _this.weburl = WebUrl;
        _this.xTemplate = "<div class=\"moreInfo\">\n                  <p><span>" + Time + "</span></p>\n                  <p>" + Price + "</p>\n                  <p><a href=\"https://" + WebUrl + "\">" + WebUrl + "</p> \n                  </div>";
        return _this;
    }
    Events.prototype.render = function () {
        if (this.created === undefined) {
            return this.wrapper + this.template + this.xTemplate + '</div>';
        }
        else {
            return this.wrapper + this.template + ("<p>Created: " + this.created + "</p>") + this.xTemplate + '</div>';
        }
    };
    return Events;
}(Locations));
