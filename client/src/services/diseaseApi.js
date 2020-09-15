import axios from 'axios';

const allData = () => {
  return new Promise((resolve, reject) => {
    axios
      .get('https://disease.sh/v3/covid-19/all?yesterday=true')
      .then((result) => {
        const all = Object(result.data);
        resolve(all);
      })
      .catch((error) => reject(error));
  });
};

const getCountryData = (country) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://disease.sh/v3/covid-19/countries/${country}?strict=true`)
      .then((result) => {
        const data = Object(result.data);
        resolve(data);
      })
      .catch((error) => reject(error));
  });
};

export { allData, getCountryData };
