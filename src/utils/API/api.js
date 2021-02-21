import axios from 'axios'

const API = {
    google_search: (q, fileType) => axios.get(`/api/google/?q=${encodeURIComponent(q)}&fileType=${encodeURIComponent(fileType)}`)
}

export default API