// const axios = require('axios');
// axios.defaults.baseURL = 'https://api.example.com';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;


const yelp = require('yelp-fusion');

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey = 'mf9pjbCEhVoSQa40JKtzR6qGMSKt4f3Wh08M_KN72ejLbxHi8GXvKp_TwWjqn_I-97gfLm7wDTB4tGbCPYTdUTmFRIAlOP9blW6aF1ypw0IHO--5fg_YHjRwkobeW3Yx';

const searchRequest = {
  term: 'Four Barrel Coffee',
  location: 'san francisco, ca',
};
let prettyJson;
const client = yelp.client(apiKey);
client.search(searchRequest).then((response) => {
  firstResult = response.jsonBody.businesses[0].location;
  const prettyJson = JSON.stringify(firstResult, null, 4);
  //   console.log(prettyJson);
}).catch((e) => {
  console.log(e.message);
});

const address = {
  address1: '1111 Valencia St',
  address2: '',
  'address3': '',
  city: 'San Francisco',
  zip_code: '94103',
  'country': 'US',
  'state': 'CA',
  'display_address': [
    '222 Valencia St',
    'San Francisco, CA 94103',
  ],
};

// dpd.events.post(address, (result, error) => {
//   console.log(result);
// });
