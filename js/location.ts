
class Locations{
 public name: string;	
 public address: string;	
 public picture: string;
 public id: string;
 public template: string;
 public wrapper: string;

 constructor(Name,Address,Picture){
  let Id=Math.floor(Math.random()*Math.pow(2,128)).toString(16);	
  this.name=Name;
  this.address=Address;	
  this.picture=Picture;
  this.id=Id;
  this.template=`<img src="${Picture}"/>
                 <p>${Address}</p> 
                `;
  this.wrapper=`<div id="place${Id}" class="col-lg-3 col-md-6 col-sm-12 place">`;              
 }
 render(){
  console.log(this.id);
  return this.wrapper+this.template+'</div>';	
 }
}