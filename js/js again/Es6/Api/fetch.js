console.clear();
// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'PUT',
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
//   body: JSON.stringify({
//     id: 1,
//     title: 'fooma',
//     body: 'barma',
//     userId: 1,
//   }),
// })
//   .then((res) => {
//     if (!res.ok) {
//       const msg = `error: ${res.status}`;
//       throw new Error(msg);
//     }
//     return res.json();
//   })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

//asunc and await ..
const makeFun = async (url) => {
  let res = await fetch(url);
  if (!res.ok) {
    const msg = `Error : ${res.status}`;
    throw new Error(msg);
  }
  const data = await res.json();
  return data;
};

// const sendData = () => {
//   makeFun('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//       title: 'foo',
//       body: 'bar',
//       userId: 1,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// };

// sendData();

const updateData = () => {
  makeFun('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
      id: 1,
      title: 'fooma',
      body: 'barma',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

updateData();

// const getData = () => {
//     makeFun('https://jsonplaceholder.typicode.com/posts')
//       .then((res) => console.log(res))
//       .catch((err) => console.log(err));
//   };

//   getData();
