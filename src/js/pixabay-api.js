const API_KEY = '44899470-dc00d504e23887fc09aa8b920';

export function searchImages(searchQuery) {
  const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
    searchQuery
  )}&image_type=photo&orientation=horizontal&safesearch=true`;

  return fetch(URL).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}
