import axios from 'axios'

export const register = newUser => {
    return axios
    .post('/register', {
        username: newUser.username,
        email: newUser.email,
        password: newUser.password,
        confirm_password: newUser.confirm_password,
        gender: newUser.gender,
        dob: newUser.dob
    })
    .then(response => {
        alert("Registered!")
    })
}

export const login = newUser => {
    return axios
    .post('/login', {
        email: newUser.email,
        password: newUser.password
    })
    .then(response => {
        alert("Logged in!")
    })
    .catch(err => {
        console.log(err)
    })
}

