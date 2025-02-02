import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

export const searchSettings = {
  key: '44443472-3b41bcc651e7d0b56b1888f38',
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 15,
  page: 1,
};

export async function fetchImage() {
  const response = await axios.get('/', { params: searchSettings });
  return response.data;
}
