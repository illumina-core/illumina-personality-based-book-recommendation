import axios from 'axios'

export const register = newUser => {
    return axios
    .post('register', {
        username: newUser.username,
        email: newUser.email,
        password: newUser.password,
        dob: newUser.dob
    })
}

export const login = newUser => {
    return axios
    .post('login', {
        login_id: newUser.login_id,
        password: newUser.password
    })
}

export const search_book = query => {
    return axios
    .get('search?' + query)
}

export const get_book = id => {
    return axios
    .get(id)
}

export const getUser = () => {
    return axios
    .get('get-user')
}

export const logout = () => {
    return axios
    .post('logout')
}

export const add_review = rev => {
    return axios
    .post('add-review', {
        review: rev.review,
        book: rev.book
    })
}

export const rateBook = newRating => {
    return axios
    .post('rate-book', {
        book: newRating.id,
        rating: newRating.rating
    })
}