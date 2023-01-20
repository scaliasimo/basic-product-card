const button = document.querySelector('.btn')

function getAlert() {
    button.addEventListener('click', e => {
        alert("Ok, the click on the button works but actually you can't add any items to the cart, this is only for test purposes :)")
    })
}

getAlert()