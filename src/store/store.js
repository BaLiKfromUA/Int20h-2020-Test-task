import Vue from 'vue'
import 'es6-promise/auto';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        stage: "start",
        result: "",
        tracks: [],
        index: -1,
        //todo:api in state??
    },
    mutations: {
        startNewGame: state => {
            state.stage = "start";
            state.tracks = [];
            state.index = -1;
        },
        showPredictionResult(state, tracks) {
            state.stage = "verdict";
            state.tracks = tracks;
            state.index = 0;
        },
        showResult(state, result){
            state.stage = "result";
            state.result = result
        }

    },
    getters: {
        stage: state => {
            return state.stage;
        },

        getIndex: state => {
            return state.index;
        },

        getTopTrack: state => {
            if (state.index === -1 || state.index === state.tracks.length) {
                return null;
            }

            return state.tracks[state.index++];
        }
    }
})