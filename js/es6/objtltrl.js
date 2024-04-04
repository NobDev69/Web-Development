//objet Literials

function sdntId(names, age) {
  return {
    names,
    age,
  };
}

console.log(sdntId('shabbir', 22));

let msg = {
  body: function () {
    return 'Hi, i am object literale body object';
  },
  helper: function () {
    return 'Hi, i am object literale helper object';
  },
  'body name'() {
    return 'This is new object literial';
  },
};

console.log(msg.body());
console.log(msg.helper());
console.log(msg["body name"]());
