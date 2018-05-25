class Restaurants extends Locations{
 public phone: string;
 public category: string;
 public weburl: string;	
 public xTemplate: string;

 constructor(Name,Address,Picture,Phone,Category,WebUrl){
  super(Name,Address,Picture);	
  this.phone=Phone;
  this.category=Category;
  this.weburl=WebUrl;
  this.xTemplate=``;
 }

 render(){

 }
}