let json = {
    "name": "Muhammad Ishaq",
    "gender": "Male",
    "age": 23,
    "address": {
        "street": "87",
        "city": "Gultari Matyal Skardu",
        "state": "Gilgit Baltistan",
        "postalCode": "16350"
    },
    "phoneNumber": [
        {
            "type": "personal",
            "number": "116263747"
        }
    ]
};

// * Access all values of address
// for (let key in json.address) {
//     if (json.address.hasOwnProperty(key)) {
//         console.log(key + " : " + json.address[key]);
//     }
// }

// Object.values(json.address).forEach(function (value) {
//     console.log(value);
// });

// for (let key in json.phoneNumber) {
//     // console.log(typeof json.phoneNumber[key]);   // return object
//     console.log(json.phoneNumber[key]);
// }

// let phoneNumbers = json.phoneNumber;
// for (let i = 0; i < phoneNumbers.length; i++) {
//     // console.log(typeof phoneNumbers[i]); // return object
//     console.log("Type: " + phoneNumbers[i].type);
//     console.log("Number: " + phoneNumbers[i].number);
// }

// * Access all values of address
let phoneNumbers = json.phoneNumber;
phoneNumbers.forEach(function(phoneNumber) {
    console.log("Type: " + phoneNumber.type);
    console.log("Number: " + phoneNumber.number);
});
