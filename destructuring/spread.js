const user = {
    id: 3,
    name: 'Ron',
    organization: {
        name: 'Parks & Recreation',
        city: 'Pawnee',
    },
}

const updatedUser = {
    ...user,
    organization: {
        ...user.organization,
        zipcode: 8401
    }
}
console.log(updatedUser)