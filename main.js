let gitContainer = document.querySelector('.container')
const url = "https://api.github.com/users/rsvincent1"
const gitRepo = "https://api.github.com/users/rsvincent1/repos"
let customerCard = document.getElementsByClassName('container')
let userName = document.getElementById('username')
let profile = document.getElementById('profileImage')
let loco = document.getElementById('location')
let github = document.getElementById('gitUrl')
let image = document.getElementById('pic')



fetch(url).then((response) => {
    return response.json();

}).then((parsedJsonResponse) => {
    // console.log(parsedJsonResponse)



    image.src = parsedJsonResponse.avatar_url
    loco.innerText = "Location: " + parsedJsonResponse.location
    github.innerText = "GitHub URL: " + parsedJsonResponse.html_url
    userName.innerText = "GitHub username: " + parsedJsonResponse.login







    fetch(gitRepo).then((response) => {
        return response.json();

    }).then((parsedJsonResponse) => {
        let repostiory = document.getElementById('links')
        let repostiory1 = document.getElementById('links1')

        const gLink = document.createElement('a')
        gLink.href = innerText = parsedJsonResponse[1]['html_url']
        gLink.textContent = "Hello World"
        repostiory.appendChild(gLink)

        const gLink2 = document.createElement('a')
        gLink2.href = innerText = parsedJsonResponse[0]['html_url']
        gLink2.textContent = "Assignment 1"
        repostiory1.appendChild(gLink2)

        repo.innerText = "Github Repos"

        // repostiory.innerText = parsedJsonResponse[0]['html_url']
        // repostiory1.innerText = parsedJsonResponse[1]['html_url']
    })


})