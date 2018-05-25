
//the shell of the app 
class Blog {
 public template: string;	
 constructor(){
  this.template=`<h1>Travel-o-matic Blog</h1>
                 <mynav></mynav>
                 <output></output> 
                `;	
 }
 render(){
  $('blog').html(this.template);	 
 }
}

//export {Blog};