
const getters = {
    token : state => state.user.token,
    name: state => state.user.name,
    id : state => state.user.id,
    phone : state => state.user.phone
}

export default getters