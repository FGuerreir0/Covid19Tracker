import axios from 'axios'

const getUser = () =>{
  return new Promise((resolve, reject) =>{
    axios
    .get('https://ipapi.co/json/')
    .then((result)=>{
      const userData = new Object(result.data);
      resolve (userData);
    })
    .catch((error) => console.log(error))
  })
}

export { getUser };