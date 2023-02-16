import axios from 'axios';
const KEY = '32875962-75e3deeecb029b3447d6e6fc0';

export const fetchPhotosData = async query => {
  const { data } = await axios.get(
    `https://pixabay.com/api/?q=${query}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  console.log(data.hits);
  return data.hits;
};
