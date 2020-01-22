import Vue from 'vue'
import 'es6-promise/auto';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        stage: "start",
        tracks: [],
        index: -1,
        playerWon: false
    },
    mutations: {
        startNewGame: state => {
            state.stage = "start";
            state.tracks = [];
            state.index = -1;
            state.playerWon = false;
        },
        showPredictionResult(state, tracks) {
            state.stage = "verdict";
            state.tracks = tracks;
            state.index = 0;
        },
        showResult(state, result) {
            state.stage = "result";
            state.playerWon = result
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
        },

        playerWon: state => {
            return state.playerWon;
        }
    }
})