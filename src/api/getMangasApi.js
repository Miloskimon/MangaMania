export const getMangasAPI = async (genre) => {

    const options = {
      method: 'GET',
      url: 'https://mangaverse-api.p.rapidapi.com/manga/fetch',
      params: {
        page: '1',
        genres: `${genre || ''}`,
        nsfw: 'false',
      },
      headers: {
        'X-RapidAPI-Key': '67292a3a38mshdc58cabdecd7d3cp146d08jsn04b20646f247',
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