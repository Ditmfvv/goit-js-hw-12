import axios from 'axios';

const keyAPI = '48729449-8dc77fb28ea9fafa38a1576eb';

export const fetchPhotos = (query, currentPage) => {
  const axiosOptions = {
    params: {
      key: keyAPI,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 40, 
      page: currentPage,
    },
  };

  return axios.get('https://pixabay.com/api/', axiosOptions);
};