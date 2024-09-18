const form = document.querySelector('#form');
form.addEventListener('submit', async(e)=>{

    e.preventDefault();
    const formData = new FormData(form);
    console.log(formData.entries())
    const jsonData = JSON.stringify(Object.fromEntries(formData.entries()));

    try{

        let url = 'http://localhost:8080/users'
        let options = {
        method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: jsonData
        }
        const response = await fetch(url,options)

        console.log(response)

        if(!response.ok){
            throw new Error('Sem internet ou problema na rede');
        }
        if(response.status===201){
            const result = await response.json();
            console.log(result)
        }

    } catch(e){
        console.error(e)
    }

    

})