import axios from 'axios'

const allData = () =>{
  return new Promise ((resolve, reject) =>{
    axios
    .get('https://disease.sh/v3/covid-19/all')
    .then ((result) =>{
      const all = Object.keys(result.data.message);
      resolve (all);
    })
    .catch((error) => reject(error));
  })
}

export {allData};