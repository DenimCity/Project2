import axios from 'axios'


 const fetch = async (name, method, url) => {

      console.log(`Invoked ${fetch.name.toUpperCase()} 
        For ${name}
        Request-Type: ${method} 
        API: ${url}`)
     try {
          const response = await axios({
             method: method,
            url: url
            })
          if (response.status < 299) {
            return response.data
          }
      throw new Error(`Error retrieving data for ${ url } `)
     } catch (e) {
           console.log(e.message)
     }

}

export default fetch
