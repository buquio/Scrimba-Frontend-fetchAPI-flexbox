/* 
    Update the getColors() function to take that count as a parameter
    
    Create a variable to store the count of colors to be loaded
        
    Set the count to 100 colors, update the .my-color class to maintain the grid structure
*/

function displayColors(colors) {
    let myColorsHtml = colors.map(color => {
        return `<div class="my-color" style="background-color: ${color.value}"></div>`
    }).join('')
    
    console.log(myColorsHtml)

    document.body.innerHTML = `<div class="my-colors">
        ${myColorsHtml}
    </div>`
}

async function getColors(colorCount) { //Update the getColors() function to take that count as a parameter

    let response = await fetch(`https://api.noopschallenge.com/hexbot?count=${colorCount}`)
    let data = await response.json()
    let colors = data.colors  // Create a variable to store the count of colors to be loaded
    
    displayColors(colors) //you can write the function outside & call it here
}

let colorCount = 100
getColors(colorCount)
