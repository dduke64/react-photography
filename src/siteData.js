

export const getData = () => 
   fetch('https://personalwebsitephotos.blob.core.windows.net/data/text.json'
  ,{
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
  }
  )
    .then(function(response){
        return response.json();
    })
    
