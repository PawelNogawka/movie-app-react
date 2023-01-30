const BASE_URL = "https://youtube-v31.p.rapidapi.com";


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key':process.env.REACT_APP_RAPID_API_KEY,
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

export const fetchApi = async (url) =>{
    
    const data = await fetch(`${BASE_URL}/${url}`, options)
	const response = await data.json()

   return response

}

//.then(response => response.json())
	//.then(response => console.log(response))
	//.catch(err => console.error(err));




	
//<iframe
        //  className="video-details__player"
      //    width="420"
      //    height="315"
      //    src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1`}
      //    title="YouTube video player"
      //    frameBorder="0"
      //  ></iframe>
