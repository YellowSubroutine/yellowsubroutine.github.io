/*var myHeading=document.querySelector('h1');
myHeading.textContent='Hello world!';*/
var myImage=document.querySelector('img');
myImage.onclick=function(){
	var mySrc=myImage.getAttribute('src');
	if(mySrc==='images/crown.jpg'){
		myImage.setAttribute('src','images/old_crown.jpg');
	}
	else{
		myImage.setAttribute('src','images/crown.jpg');
	}
}

var myHeading=document.querySelector('h1');
var myButton=document.querySelector('button');
function setUserName(){
	var myName=prompt("Please enter your name:");
	localStorage.setItem('name',myName);
	myHeading.innerHTML='Crown is greeting you, '+myName;
}
if(!localStorage.getItem('name')){
	setUserName();
}
else
{
	var storedName=localStorage.getItem('name');
	myHeading.innerHTML='Crown is greeting you, '+storedName;
}
myButton.onclick=function(){
	setUserName();
}