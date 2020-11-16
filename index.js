
 // ==========make sound======
function makeSound(key)  {
	switch(key) {
	 	case "w" :
		 	let tom1= new Audio("sounds/tom-1.mp3");
		 	tom1.play();
	 	break;

	 	case "a" :
		 	let tom2= new Audio("sounds/tom-2.mp3");
		 	tom2.play();
	 	break;

	 	case "s" :
		 	let tom3= new Audio("sounds/tom-3.mp3");
		 	tom3.play();
	 	break;

	 	case "d" :
		 	let tom4= new Audio("sounds/tom-4.mp3");
		 	tom4.play();
	 	break;

	 	case "j" :
		 	let snare= new Audio("sounds/blue.mp3");
		 	snare.play();
	 	break;

	 	case "k" :
		 	let crash= new Audio("sounds/crash.mp3");
		 	crash.play();
	 	break;

	 	case "l" :
		 	let kick= new Audio("sounds/kick-bass.mp3");
		 	kick.play();
	 	break;

	 	default :console.log( key );
	 } // switch statement
} //makeSound() function


// ==========click==========
 for(let i=0; i < document.querySelectorAll(".drum").length; i++){
 	document.querySelectorAll("button")[i]
 	 .addEventListener("click", function() {
 	 	var buttonInnerHTML = this.innerHTML;
 	 	makeSound(buttonInnerHTML);
      
 	 	buttonAnimation(buttonInnerHTML); // ===button Animation===
	});
 }

//=============keypress==========
 document.addEventListener("keypress", function(event){
 	let key = event.key;
 	makeSound(key);

 	buttonAnimation(key); // ===button Animation===
 })


//=========button Animation=======
 function buttonAnimation(currentkey) {
 	var activeButton = document.querySelector(`.${currentkey}`);
 	activeButton.classList.add("pressed");

 	setTimeout(function(){  
 		activeButton.classList.remove("pressed");
 	} , 100); // after 100ms "pressed" class will be removed
 } //buttonAnimation() function


