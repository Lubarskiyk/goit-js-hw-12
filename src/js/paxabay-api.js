import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

const searchSettings = {
  key: '44443472-3b41bcc651e7d0b56b1888f38',
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  //   per_page: 12,
};

export async function fetchImage(searchText) {
  searchSettings.q = searchText;
  const response = await axios.get('/', { params: searchSettings });
  console.log(response.data);
  return response.data;
}
