import Vue from 'vue'
import 'es6-promise/auto';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        tracks: [],
        index: -1
    },
    mutations: {
        setTracks(state, tracks) {
            state.tracks = tracks;
            state.index = 0;
        }
    },
    getters: {
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