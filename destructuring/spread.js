const user = {
    id: 3,
    name: 'Ron',
}

const updatedUser = { ...user, isLoggedIn: true }
console.log(updatedUser)
console.log("USER", user)