const API_KEY = '73b19491b83909c7e07016f4bb4644f9:2:60667290';
const LIST_NAME = 'hardcover-fiction';
const API_STEM = 'https://api.nytimes.com/svc/books/v3/lists';

const fetchBooks = (list_name = LIST_NAME) => {
  // const url = `${API_STEM}/${list_name}?response-format=json?api-key=${API_KEY}`;
  const url = 'https://dapi.kakao.com/v3/search/book?target=title&query=html';

  return fetch(url, {
    headers: {
      'Authorization': `KakaoAK 7946b76f4b216a8ad65d3ca292a762b4`
    }
  })
    .then(res => res.json())
    .then(res => res.documents)
    .catch(err => console.log(err));
};

export default {
  fetchBooks
};
