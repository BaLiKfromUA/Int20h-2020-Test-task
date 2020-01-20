import Vue from 'vue'
import 'es6-promise/auto';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        tracks: [],
        index: -1,
        stage: "start"
    },
    mutations: {
        setTracks(state, tracks) {
            state.tracks = tracks;
            state.index = 0;
        },
        setStage(state, newStage) {
            state.stage = newStage;
        }
    },
    getters: {
        stage(state) {
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