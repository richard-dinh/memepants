import axios from 'axios'

const API = {
    google_search: () => axios.get('/api/google')
}

export default API