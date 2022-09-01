let colorsArray = []

function getColors(){
    let colorHex = document.getElementById("color-hex").value.substring(1) 
    let colorMode = document.getElementById("color-mode").value 

    fetch(`https://www.thecolorapi.com/scheme?hex=${colorHex}&mode=${colorMode}&count=5`)
        .then(response => response.json())
        .then(data =>  {
            for (let i=0; i < data.colors.length; i++){
                colorsArray.push(data.colors[i].hex.value)
            } 
        
            const newColors = colorsArray.map(color =>{
                return`
                <div class="color-details">
                    <div class="color" style="background:${color}">
                    </div>
                    <p class="color-hex-text">${color}</p>
                </div>`
            }) 

            document.getElementById("colors-container").innerHTML = newColors.join(" ") 

        })
}

getColors() 

 document.getElementById("get-scheme-btn").addEventListener("click", function(event){
        colorsArray = [] //empties array ready for new color request
        event.preventDefault()
        getColors()
    })
   