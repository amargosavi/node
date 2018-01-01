function Greet(){
	this.greeting='Hellog world !!';
	this.greet=function(){
		console.log(this.greeting);
	}
}
module.exports=new Greet();