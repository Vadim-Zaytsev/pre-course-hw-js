let passportWithAddress = {
    name: 'Petr',
    surname: 'Petrov',
    address: {
        country: 'USA',
        city: 'LA',
    },
};

function deepCopy(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    const copy = Array.isArray(obj) ? [] : {};

    for (const key in obj) {
        copy[key] = deepCopy(obj[key]);
    }

    return copy;
}

const passportWithAddressCopy = deepCopy(passportWithAddress);

passportWithAddressCopy.address.city = 'Bobryisk';

console.log(passportWithAddress.address.city);
console.log(passportWithAddressCopy.address.city);
