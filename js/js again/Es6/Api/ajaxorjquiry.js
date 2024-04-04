const makeRequist = async (url, method) => {
  try {
    const result = await $.ajax({
      url: url,
      method: method,
    });
    return result;
  } catch (err) {
    console.log(err);
  }
};

const getData = () => {
  makeRequist('https://jsonplaceholder.typicode.com/posts', 'GET').then(
    (res) => {
      console.log(res);
    }
  );
};

getData();
