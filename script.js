let rainyURL = "https://cdn.glitch.com/d809b251-4810-44a5-b53a-5b8a21a2f278%2F95edfb407f54bd044b9cf7cf649118f.jpg?v=1619740334077";

let idontknowURL = "https://cdn.glitch.com/d809b251-4810-44a5-b53a-5b8a21a2f278%2Fc639251a6c4bd8854857031657bd397.jpg?v=1619740328922";

let sunnyURL = "https://cdn.glitch.com/d809b251-4810-44a5-b53a-5b8a21a2f278%2Fa0d61d41b6408758cb9f0aedec332cb.jpg?v=1619740342245";



let inputElement = document.querySelector("#input");

let result = document.querySelector("#result");

// Detect when we press a key while in the text box
inputElement.addEventListener("keydown",function(event){

  // Detect when we specifically press enter key
  if (event.key == "Enter"){
    
    // Get the contents of the text input (aka name)
    let weather = inputElement.value;
    console.log(weather);

    //We can also clear what we wrote in the text box
    inputElement.value = "";
    
    //Clear the reading result from last time
    result.innerHTML = "";
    
    let list = document.getElementsByClassName('iframe-container');
    for (let item of list) {
        console.log(item.classList);
        if (!item.classList.contains('hide')) {
            item.classList.add('hide');
        }
    }

    // Loop through 4 times
    for (let i = 0; i < 1; i++){
      
      // Print the number we're at in the loop
      console.log(i);
      
      // Get the i-th letter in the name
      
      // Create a new HTML image element for the card
      let selectedPics = document.createElement("img");
      
      // If letter is any of these, use the devil card
      if (["sunny", "nice", "hot"].includes(weather)){
        selectedPics.src = sunnyURL;
        console.log(document.getElementsByClassName('rainy')[0]);
        document.getElementsByClassName('sunny')[0].classList.remove('hide');
      }
      
      // If letter is any of these, use the magician card
      if (["wet", "rain", "stormy", "rainy", "windy"].includes(weather) ){
        selectedPics.src = rainyURL;
        document.getElementsByClassName('rainy')[0].classList.remove('hide');
      }
      
      // If letter is any of these, use the star card
      if (["cloudy","I don't know", "idk", "not sure"].includes(weather)){
        selectedPics.src = idontknowURL;
        document.getElementsByClassName('idk')[0].classList.remove('hide');
      }
      
      
      result.appendChild(selectedPics);
      
    }
    
  }
})