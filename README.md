
# Travel-o-matic blog

You enjoy traveling to different places, visiting events and eating good food in a restaurant. 
You want to create TypeScript-based system that presents all of your experiences in a web-page.


What is common to a place, event and restaurant is a Location. Since you know about classes, 
you decided that your base class Location should hold information about city, ZIP-code, address 
(single line like “Kettenbr&uuml;ckengasse 23”), and a teaser image. That base class has the function 
render() which is used for displaying the object’s properties on the screen as HTML.


A Restaurant must also display  telephone number, type (“chinese”, “indian”, “wienerisch”, …)  and 
a web address. Restaurant objects inherit their basic properties (like ZIP-code) from the Location class. 
Displaying function must of course be updated.   


Same goes for the Events - they have their additional properties like EventDate (“12. June 2018”) and 
EventTime (“17:00”) and ticket price (in EUR) that also need to be displayed in addition to base classes’ 
Location properties.   


For the basic part of this CodeReview, you need to create a structure of TypeScript/JavaScript classes, 
their respective constructors and their render() function that will display the relevant data of places, 
events and restaurants that you have visited.

