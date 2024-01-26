export const getMangasApi = async (genre) => {

    const options = {
    method: 'GET',
    url: 'https://mangaverse-api.p.rapidapi.com/manga/fetch',
    params: {
    page: '1',
    genres: `${genre}`,
    nsfw: 'false',
    },
    headers: {
    'X-RapidAPI-Key': '379911064fmshc542df845949ec2p17db75jsnc7f4b80e503d',
    'X-RapidAPI-Host': 'mangaverse-api.p.rapidapi.com'
    }
    };
    
    try {
    const getMangasRes = await fetch(options.url, options);
    const data = await getMangasRes.json();
    
    return data.data;
    
    } catch (error) {
    console.error(error);
    }
    }
    mangaverse-api.p.rapidapi.com