const navBar = document.querySelector('.navbar-toggle');

const space = document.querySelector('.space')

function revealContent(){
    if (space.classList.contains('.navbar-toggle')){
        space.classList.remove('.navbar-toggle')
    }else {
        space.classList.add('.navbar-toggle')
    }
}

navBar.addEventListener('click', revealContent)