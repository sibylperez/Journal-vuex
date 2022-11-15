import axios from "axios";

const journalApi = axios.create({
    baseURL: 'https://journal-vuex-default-rtdb.firebaseio.com'
})

export default journalApi