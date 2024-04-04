let person = {
    firstName : "Shabbir",
    lastName : "Hossan",
    dob : "29/09/2001",
    Profession : "Student",

    fullName: function() {
        return `${firstName} and ${lastName}`;
    }
}

console.log(person.firstName);
console.log(person.fullName());

// console.log(`first name is ${person.firstName} and last name is ${person.lastName}`)



