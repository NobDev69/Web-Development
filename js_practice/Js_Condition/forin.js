const person = {
    fname: 'shabbir',
    lname: 'hossan',
    age: 22,
    dob: '29/01/2001'
};

for (let x in person) {
    console.log(x + ':');
    console.log(person[x]);
}

const personArr = ['shabbir','rabbi','jahid','hossen','ahmed'];
for (let x in personArr) {
    console.log(x + ':');
    console.log(personArr[x]);
}