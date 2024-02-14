export default async function DataFetch (url,method,dataObj=null) {

    const fetchObject = {
      method: method,
      headers: {
        "Content-Type": "application/json",
      }
    }
    try{
        if(dataObj !== null){
          fetchObject.body = JSON.stringify(dataObj)
        }
        const response = await fetch(url,fetchObject)
          //Check if response is okay or not
        if(!response.ok){
          console.log(`Error Message : ${response}`)
        }
        const data = await response.json()
        return data

    }catch(error){
        console.log("Error Message: " + error)
    }
  }