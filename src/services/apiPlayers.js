export async function getCountries(){
    const palestine = {
        "id":1,
        "name":"Palestine",
        "image_path":"https://flagcdn.com/h80/ps.png",
        "extra":{
            "continent":"Asia",
            "sub_region":"Western Asia",
            "world_region":"EMEA",
            "fifa":"PLE",
        }
    };
    const result = await fetch(`/countries?api_token=cgh0RQUwJ0chFoRYFRequaHw2SJT5p7TheUXppRjsb2aequwgAj6COnEPXMU`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    const jsonResult = await result.json();
    const countries = jsonResult?.data;
    let originalCountries = countries.filter(res => res.id !== 802);
    originalCountries.unshift(palestine);
    return originalCountries;
}

export async function getPlayersByCountry(id){
    const result = await fetch(`/countries/${id}/players?api_token=cgh0RQUwJ0chFoRYFRequaHw2SJT5p7TheUXppRjsb2aequwgAj6COnEPXMU`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    const jsonResult = await result.json();
    const players = jsonResult?.data;
    return players;
}

export async function getPlayersById(id){
    const result = await fetch(`/players/${id}?api_token=cgh0RQUwJ0chFoRYFRequaHw2SJT5p7TheUXppRjsb2aequwgAj6COnEPXMU`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    const jsonResult = await result.json();
    const playerDetails = jsonResult?.data;
    return playerDetails;
}
