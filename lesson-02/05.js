let passport = {
    name: 'Petr',
    surname: 'Petrov',
};

const passportCopy = {};

for (let key in passport) {
    passportCopy[key] = passport[key];
}
passportCopy.name = 'Ivan';

console.log(passport.name);
console.log(passportCopy.name);
