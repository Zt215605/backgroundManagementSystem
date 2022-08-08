import mockRequest from '@/utils/mockRequest'
const state = {
    list: {}
};
const mutations = {
    GETDATA(state, list) {
        state.list = list;
    }
};
const actions = {
    //发请求获取首页的mock数据
    async getData({ commit }) {
        let result;
        try {
            result = await mockRequest.get('/home/list');
            if (result.code == 20000) {
                commit("GETDATA", result.data);
            }
        } catch (error) {
            console.warn('error :>> ', error);
        }
    }
};
const getters = {};
export default {
    state,
    mutations,
    actions,
    getters
}