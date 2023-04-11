const oUsers = [
    { id: 1, name: 'Ben' },
    { id: 2, name: 'Leslie' },
]

const newUser = { id: 3, name: 'Ron' }
const uUsers = [
    ...oUsers,
    newUser
]

console.log(uUsers)