/* 
    2. 
    
    Write a getUserDiv function
    
    Create a Flexbox container my-online-users
    
    Display the users vertically
        -Fill all available space
*/

async function getUsers() {
    let response = await fetch("users.json")
    let users = await response.json()
    return users
}

function getUserDiv(user) {
    return `
        <div class="my-online-user">
            <div class="user-username">${user.username}</div>
            <div class="user-online"></div>
        </div>
    `
}

getUsers().then(users => {
    // let sampleUser = users[0]
    // let userDiv = getUserDiv(sampleUser)
    
    document.body.innerHTML = `<div class="my-online-users">
        ${users.map(user => getUserDiv(user)).join('')} 
    </div>`//every user will use the function-pattern inside getUserDiv(user)
})
