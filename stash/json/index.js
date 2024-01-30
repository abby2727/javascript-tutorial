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
            "type": "Personal",
            "number": "123"
        },
        {
            "type": "Business",
            "number": "456"
        }
    ]
};

// console.log(json.phoneNumber[1].type)
// json.phoneNumber.forEach(function (phoneNumber) {
//     console.log("Type: " + phoneNumber.type);
//     console.log("Number: " + phoneNumber.number);
// });

console.log('Accessing the value of address in the json object.')
for (const key in json.address) {
    console.log(json.address[key])
}