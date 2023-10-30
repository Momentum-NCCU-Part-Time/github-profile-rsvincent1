const url = "https://api.github.com/users/rsvincent1"
let customerCard = document.getElementsByClassName('container')
let userName = document.getElementById('username')
let profile = document.getElementById('profileImage')
let loco = document.getElementById('location')
let github = document.getElementById('gitUrl')





fetch(url).then((response) => {
    return response.json();

}).then((parsedJsonResponse) => {
    console.log(parsedJsonResponse)




    loco.innerText = "Location: " + parsedJsonResponse.location
    github.innerText = "GitHub URL: " + parsedJsonResponse.html_url
    userName.innerText = "GitHub username: " + parsedJsonResponse.login
    let repo = document.getElementById('repo')


    repo.innerText = "Github Repos"

    let repostiory = document.getElementById('links')
    repostiory.innerText = parsedJsonResponse.repos_url





})


