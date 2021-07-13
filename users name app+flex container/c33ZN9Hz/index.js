/* 
    Challenge
    
    Using the body tag as a Flexbox container
        re-create the provided layout
    
    Hint: The Header and Footer are each 10% 
        of the container's height
*/

async function getUsers() {
    let response = await fetch("users.json")
    let users = await response.json()
    return users
}

function getUserDiv(user) { //or getUserHtml i.e prepare div for 1 user inside users.json 
    return `<div class="my-online-user">
        <div class="user-username">${user.username}</div>
        <div class="user-online"></div>
    </div>`
}

//prepare divs: header,online-users(div for all user),main-content,footer
getUsers().then(users => { 
    // let sampleUser = users[0]

    //then insert all div inside document.body
    document.body.innerHTML = `
    <div class="header">Header</div>
    <div class="my-online-users">
        ${users.map(user => getUserDiv(user)).join('')}
    </div>
    <div class="main-content">Main Content</div>
    <div class="footer">Footer</div>
    `
})
