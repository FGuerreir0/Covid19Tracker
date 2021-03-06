import axios from 'axios';

const allData = () => {
  return new Promise((resolve, reject) => {
    axios
      .get('https://disease.sh/v3/covid-19/all?yesterday=false')
      .then((result) => {
        const all = Object(result.data);
        resolve(all);
      })
      .catch((error) => reject(error));
  });
};

const history = (param) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://disease.sh/v3/covid-19/historical/${param}?lastdays=360`)
      .then((result) => {
        if (param !== 'all') {
          const all = Object(result.data.timeline);
          console.log(all);
          resolve(all);
        } else {
          const all = Object(result.data);
          console.log('entrou em api all', all);
          resolve(all);
        }
      })
      .catch((error) => reject(error));
  });
};

const allCountries = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://disease.sh/v3/covid-19/countries?strict=true`)
      .then((result) => {
        const data = Object(result.data);
        resolve(data);
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

const getYesterdayCountryData = (country) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://disease.sh/v3/covid-19/countries/${country}?yesterday=true&strict=true`)
      .then((result) => {
        const data = Object(result.data);
        resolve(data);
      })
      .catch((error) => reject(error));
  });
};

export { allData, getCountryData, allCountries, getYesterdayCountryData, history };
