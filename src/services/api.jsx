import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '32120806-a212a2c123eec8e05455b0236';
const IMAGES_PER_PAGE = 12;

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: IMAGES_PER_PAGE,
};

export const getImagesapp = async (query, page) => {
  const config = {
    params: {
      q: query,
      page: page,
    },
  };
  const response = await axios.get('', config);
  return response.data;
};
// key: '32120806-a212a2c123eec8e05455b0236',
