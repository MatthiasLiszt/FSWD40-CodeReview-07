class Restaurants extends Locations{
 public phone: string;
 public category: string;
 public weburl: string;	
 public xTemplate: string;

 constructor(Name,Address,Picture,Created,Phone,Category,WebUrl){
  super(Name,Address,Picture,Created);	
  this.phone=Phone;
  this.category=Category;
  this.weburl=WebUrl;
  this.xTemplate=`<div class="moreInfo">
                  <p><span>${Category}</span></p>
                  <p>${Phone}</p>
                  <p><a href="https://${WebUrl}">${WebUrl}</p> 
                  </div>`;
 }

 render(){
  if(this.created===undefined) 
   {return this.wrapper+this.template+this.xTemplate+'</div>';}
  else   
   {return this.wrapper+this.template+`<p>Created: ${this.created}</p>`+this.xTemplate+'</div>';} 
 }
 
}