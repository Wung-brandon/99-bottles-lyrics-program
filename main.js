var bottles = 99;
const beer = document.getElementById("beer")

// USING A WHILE LOOP
while(bottles >= 0){
    if (bottles == 0){
        var bottleElement = document.createElement("p")
        bottleElement.textContent = "No more bottles of beer, no more bottles of beer. \n Go to the store and buy some, 99 bottles of beer on the wall"
        beer.appendChild(bottleElement)
    }
    else{
        var bottleElement = document.createElement("p")
        bottleElement.textContent = `${bottles} bottles of beer on the wall, ${bottles} of beer. \n Take one down and pass it around,
        ${bottles - 1} bottles of beer on the wall.`
        beer.appendChild(bottleElement)
        // console.log(bottles)
    }
       
    
    bottles--

}

// USING A FOR LOOP
let i 
for (i = 99; i >= 0; i--){
    console.log(`numbers are: ${i}`)
}