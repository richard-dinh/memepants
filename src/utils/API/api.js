import axios from 'axios'

const API = {
    // q and filetype are optional
    google_search: (q, fileType, start) => axios.get(`/api/google/?q=${encodeURIComponent(q)}&fileType=${encodeURIComponent(fileType)}&start=${encodeURIComponent(start)}`)
}

export default API