

const weatherForm = document.querySelector('form')
const searchElement = document.querySelector('input')


const messageOne = document.querySelector("#message-1")
const messageTwo = document.querySelector("#message-2")


weatherForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const location = searchElement.value

    messageOne.textContent = "Loading..."
    messageTwo.textContent = ''


    const url = '/weather?address=' + location

    fetch(url).then(function(response){
        response.json().then(function(data){
            if(data.error){
                messageOne.textContent = data.error
            }
            else{
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })
})