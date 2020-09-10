import axios from 'axios'


const allData = () =>{
  return new Promise ((resolve, reject) =>{
    axios
    .get('https://disease.sh/v3/covid-19/all')
    .then (result =>{
      const all = Object(result.data);
      resolve (all);
    })
    .catch(error => reject(error));
  })
}

export { allData };