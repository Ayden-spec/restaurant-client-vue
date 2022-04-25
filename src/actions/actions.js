import axios from 'axios'
import store from '../store';


let domain = 'http://localhost:5000';
let site_domain = 'http://localhost:8080/';


export const registration = async (email, password, name, callback) => {
    try {
        const response = await axios.post(`${domain}/registration`, {
            email,
            password,
            name
        })
        callback()
        console.log(response)
    } catch (e) {
        console.log(e)
    }
}

export const login = async (email, password, callback) => {
    try {
        const response = await axios.post(`${domain}/login`, {
            email,
            password
        })
        callback()
        store.dispatch('setIsAuth_action', true)
        localStorage.setItem('token', response.data.token)
        get_basket_user()
    } catch (e) {
        console.log(e)
    }
}

export const auth = async () => {
    try {
        if (!localStorage.getItem('token')) { return }
        const response = await axios.get(`${domain}/auth`,
            { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
        )
        store.dispatch('setIsAuth_action', true)
        localStorage.setItem('token', response.data.token)
    } catch (e) {
        console.log(e)
        store.dispatch('setIsAuth_action', false)
        localStorage.removeItem('token')
    }
}


export const get_categories_products = async () => {
    try {
        const response = await axios.get(`${domain}/`)
        store.dispatch('setCategories_action', response.data.categories)
        store.dispatch('setProducts_action', response.data.products)
    } catch (e) {
        console.log(e)
    }
}

export const get_basket_user = async () => {
    try {
        if (!localStorage.getItem('token')) { return }
        const response = await axios.get(`${domain}/get-basket`,
            { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
        )
        store.dispatch('setBasket_action', response.data.basket)
    } catch (e) {
        console.log(e)
    }
}

export const get_recomendation = async () => {
    try {
        const response = await axios.get(`${domain}/recomandation`)
        store.dispatch('setRecomendation_action', response.data.recommendations)
    } catch (e) {
        console.log(e)
    }
}

export const get_product_id = async (id) => {
    try {
        const response = await axios.get(`${domain}/product-id/${id}`)
        store.dispatch('setProduct_action', response.data.product)
    } catch (e) {
        //window.location.href = site_domain
        console.log(e)
    }
}
/*
export const get_promotion = () => {
    try {
        const response = await axios.get(`${domain}/promotion`)
        dispatch(get_promotion_reducer(response.data.promotion))
    } catch (e) {
        console.log(e)
    }
}
*/
export const product_add_basket = async (product_id) => {
    try {
        if (!localStorage.getItem('token')) { return }
        await axios.post(`${domain}/product-add/${product_id}`, {},
            { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
        )
    } catch (e) {
        console.log(e)
    }
}

export const product_plus_basket = async (product_id) => {
    try {
        if (!localStorage.getItem('token')) { return }
        await axios.put(`${domain}/product-plus/${product_id}`, {},
            { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
        )
    } catch (e) {
        console.log(e)
    }
}

export const product_minus_basket = async (product_id) => {
    try {
        if (!localStorage.getItem('token')) { return }
        await axios.put(`${domain}/product-minus/${product_id}`, {},
            { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
        )
    } catch (e) {
        console.log(e)
    }
}

export const product_delete_basket = async (product_id) => {
    try {
        if (!localStorage.getItem('token')) { return }
        await axios.delete(`${domain}/product-delete/${product_id}`,
            { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
        )
    } catch (e) {
        console.log(e)
    }
}

export const update_user_info = async (name, number, street, house_number, apartment_number, entrance, floor) => {
    try {
        if (!localStorage.getItem('token')) { return }
        const data = { name, number, street, house_number, apartment_number, entrance, floor }
        const response = await axios.put(`${domain}/update-user-info`, data,
            { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
        )
        console.log(response.data)
    } catch (e) {
        console.log(e)
    }
}

export const add_order = async (phone_number, name, delivery_type, street, house_number,
    apartment_number, entrance, floor, comment, payment_type, cash_change,
    when_deliver_type, number_persons, time_delivery, call, time, basket) => {
    try {
        const data = {
            phone_number, name, delivery_type, street, house_number,
            apartment_number, entrance, floor, comment, payment_type, cash_change,
            when_deliver_type, number_persons, time_delivery, call, time, basket
        }
        const response = await axios.post(`${domain}/add-order`, data);
        localStorage.removeItem('basket');
        window.location = site_domain
        console.log(response.data)
    } catch (e) {
        console.log(e)
    }
}

export const get_user_info = async (callback) => {
    try {
        if (!localStorage.getItem('token')) { return }
        const response = await axios.get(`${domain}/get-user-info`,
            { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
        )
        callback(response.data)
    } catch (e) {
        console.log(e)
    }
}