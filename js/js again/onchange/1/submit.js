const nme = document.getElementById('name');
const mail = document.getElementById('email');
const pass = document.getElementById('password');

const frm = document.querySelector('form');

frm.addEventListener('submit', submitHandeler);

function submitHandeler(e) {
  e.preventDefault();

  const userinfo = {
    name: nme.value,
    email: mail.value,
    password: pass.value,
  };
  console.log(userinfo);
  nme.value = '';
  mail.value = '';
  pass.value = '';
}
