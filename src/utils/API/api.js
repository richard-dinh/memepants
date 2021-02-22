import axios from 'axios'

const API = {
    // q and filetype are optional
    google_search: (q, fileType) => axios.get(`/api/google/?q=${encodeURIComponent(q)}&fileType=${encodeURIComponent(fileType)}`)
}

export default API