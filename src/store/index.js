import { createStore } from "vuex";
import auth from "@/modules/auth/store/auth";
import journal from "@/modules/journal/store/journal";

const store = createStore({
    modules: {
        auth,
        journal
    }
})

export default store