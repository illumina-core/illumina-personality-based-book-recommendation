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
    .post('search?' + query)
}

export const get_book = id => {
    return axios
    .post(id)
}

export const getUser = () => {
    return axios
    .post('get-user')
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
export const add_shelf = data => {
    return axios
    .post('add-shelf', { data: data })
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
    .post('get-user-shelf')
}

export const get_book_recommendation = () =>{
    return axios
    .post('get-book-recommendation')
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

export const recommend_books_by_personality = () =>{
    return axios
    .post('recommend-books-by-personality')
}

export const get_genres = () =>{
    return axios
    .post('get-genres')
}

export const update_profile_data = (data) =>{
    return axios
    .post('update-profile-data', {
        data: data
    })
}

export const update_shelf = (data) =>{
    return axios
    .post('update-shelf', { data: data })
}

export const get_genre_recommendation = () =>{
    return axios
    .post('get-genre-recommendation')
}

export const add_book = (data) =>{
    return axios
    .post('add-book', { data: data })
}

export const update_book = (data) =>{
    return axios
    .post('update-book', { data: data })
}

export const delete_book = (id) =>{
    return axios
    .post('delete-book', { id: id })
    
}

export const remove_user = user =>{
    return axios
    .post('remove-user', {
        user: user
    })
}