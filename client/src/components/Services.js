import axios from 'axios'

export const register = newUser => {
    return axios
    .post('register', {
        username: newUser.username,
        email: newUser.email,
        password: newUser.password,
        dob: newUser.dob,
        per_desc: newUser.per_desc
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

export const rate_book = rating => {
    return axios
    .post('rate-book', {
        book: rating.id,
        rating: rating.new_rating
    })

}
export const add_shelf = shelf => {
    return axios
    .post('add-shelf', {
        shelf: shelf
    })
}
    
export const add_book_to_shelf = data =>{
    return axios
    .post('add-book-to-shelf',{
        book: data.book,
        shelf: data.shelf
    })
}

export const get_user_shelf = () =>{
    return axios
    .get('get-user-shelf')
}

export const get_book_recommendation = () =>{
    return axios
    .get('get-book-recommendation')
}

export const remove_review = book =>{
    return axios
    .post('remove-review', {
        book: book
    })
}

export const remove_shelf_book = data =>{
    return axios
    .post('remove-shelf-book', {
        book: data.book,
        shelf: data.shelf
    })

}
export const remove_shelf = shelf =>{
    return axios
    .post('remove-shelf', {
        shelf: shelf
    })
}

export const get_genres = () =>{
    return axios
    .get('get-genres')
}

export const recommend_books_by_personality = () =>{
    return axios
    .get('recommend-books-by-personality')
}

export const update_profile_data = (data) =>{
    return axios
    .post('update-profile-data', {
        data: data
    })
}