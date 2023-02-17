import axios from 'axios';
const KEY = '32875962-75e3deeecb029b3447d6e6fc0';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchPhotosData = async (query, currentPage) => {
  const { data } = await axios.get(
    `${BASE_URL}?q=${query}&page=${currentPage}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  const photos = data.hits.map(({ id, webformatURL, tags, largeImageURL }) => ({
    id,
    webformatURL,
    tags,
    largeImageURL,
  }));
  const totalPhotos = data.totalHits;
  // console.log(totalImages);
  // console.log(images);
  return { totalPhotos, photos };
};
