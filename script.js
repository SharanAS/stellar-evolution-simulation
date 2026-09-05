const star = document.getElementById("star");

const buttons = document.querySelectorAll(".star-button");

const spaceBackground=document.getElementById("space-background");
const n=200;

for(let i = 0; i<n;i++){
	const tinyStar=document.createElement("div");
	tinyStar.classList.add("background-star");
	
	tinyStar.style.left = Math.random() * 100 + "%";
    tinyStar.style.top = Math.random() * 100 + "%";

    spaceBackground.appendChild(tinyStar);
}



buttons.forEach(function(button){
	button.addEventListener("click",function(){
		
		let star_name=document.getElementById("star-name");
		let star_size=document.getElementById("star-size");
		let star_color=document.getElementById("star-color");
		let star_temperature=document.getElementById("star-temperature");
		
		if(button.textContent==="Red Dwarf"){
			star.style.width="60px";
			star.style.height="60px";
			star.style.backgroundColor = "#e04c1b";
			
			star_name.textContent ="Red Dwarf";
			star_size.textContent ="Size: 0.09 - 0.6 times the radius of the Sun";
			star_color.textContent ="Color: Reddish-Orange";
			star_temperature.textContent ="Surface Temperature: 2,000K to 3,000K";
			
			
			
		}
		else if(button.textContent==="Yellow Dwarf"){
			star.style.width="120px";
			star.style.height="120px";
			star.style.backgroundColor = "#e8ce80";
			
			star_name.textContent ="Yellow Dwarf";
			star_size.textContent ="Size: 0.95 - 1.15 times the radius of the Sun";
			star_color.textContent ="Color: Yellowish-white";
			star_temperature.textContent ="Surface Temperature: 5,300K to 6,000K";
		}
		
		else if(button.textContent==="Blue Giant"){
			star.style.width="450px";
			star.style.height="450px";
			star.style.backgroundColor = "#31e1f5";
			
			star_name.textContent ="Blue Giant";
			star_size.textContent ="Size: 5-10 times the radius of the Sun";
			star_color.textContent ="Color: Bright blue";
			star_temperature.textContent ="Surface Temperature: 10,000K to 30,000K";
		}
		
		else if(button.textContent==="Red Giant"){
			star.style.width="600px";
			star.style.height="600px";
			star.style.backgroundColor = "#9c2e09";
			
			
			star_name.textContent ="Red Giant";
			star_size.textContent ="Size: 100-1000 times the radius of the Sun";
			star_color.textContent ="Color: Orange,reddish-orange";
			star_temperature.textContent ="Surface Temperature: 2,200K to 3,200K";
		}
	});
});