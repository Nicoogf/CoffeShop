const axios = require("axios");

const options = {
    method: 'GET',
    url: '',
    params: { model: 'corola' },
    headers: {

    }
};

try {
    const response = await axios.request(options);
    console.log(response.data);
} catch (error) {
    console.log(error)
}

export async function fetchCars() {
    const headers = {
       'x-host-api' : 'https://pokeapi.co/api/v2/pokemon/'
    }

    const response = await fetch("https://pokeapi.co/api/v2/pokemon/",{
        headers: headers
    })

    const result = await response.json() ;
    return result
}