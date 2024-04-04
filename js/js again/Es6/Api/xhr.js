const getMathod = (method, url) => {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);

  xhr.onload = () => {
    let data = xhr.response;
    console.log(JSON.parse(data));
  };

  xhr.onerror = () => {
    console.log('Error is here');
  };
  xhr.send();
};

const getData = () => {
  getMathod('GET', 'https://jsonplaceholder.typicode.com/posts');
};
getData();
