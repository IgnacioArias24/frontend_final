


export const HTTP = {
    GET: async (url, headers) =>{
        const response = await fetch(url, {
            method: 'GET',
            headers: headers
  
        })
        return response.json()
    },
    POST: async (url, body) =>{
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        return response.json()
    },
    PUT:  async (url, body) =>{
        try {
            const response = await fetch(url, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
              },
              body: JSON.stringify(body)
            });
        
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
        
            return response.json(); 
          } catch (error) {
            console.error('Error fetching data:', error);
            throw error; 
          }
    },
    DELETE:() =>{

    }
}

export const URL = {
    URL_API: 'https://backend-final-blush.vercel.app',
}