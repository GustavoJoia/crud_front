async function listar(){
    let url = 'http://localhost:8080/users'

    const response = await fetch(url)
    const data = response.json()

    console.log(await data)
}

document.querySelector('#submit').addEventListener('click',()=>{
    listar();
})