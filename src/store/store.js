import Vue from 'vue'
import 'es6-promise/auto';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
        stage: "start",
        tracks: [],
        playerWon: false,
        userScore: 0,
        computerScore: 0,
        attempt: 1,
        attempts: 5
    },
    mutations: {
        startNewGame: state => {
            state.stage = "start";
            state.tracks = [];
            state.playerWon = false;
        },
        showPredictionResult(state, tracks) {
            state.stage = "verdict";
            state.tracks = tracks;
            state.attempt = 0;
            state.attempts = tracks.length < 5 ? tracks.length : 5;
        },
        showResult(state, result) {
            state.stage = "result";

            if (result === true) {
                ++state.userScore;
            } else {
                ++state.computerScore;
            }

            state.playerWon = result
        },
        showVariants: state => {
            state.stage = "table"
        },
        resetApp: state => {
            state.computerScore = 0;
            state.userScore = 0;

            state.stage = "start";
            state.tracks = [];
            state.playerWon = false;
        }
    },
    getters: {
        stage: state => {
            return state.stage;
        },

        attempt: state => {
            return state.attempt;
        },

        attempts: state => {
            return state.attempts;
        },

        getTopTrack: state => attempt => {
            console.log(attempt);
            ++state.attempt;

            return state.tracks[state.attempt - 1];
        },

        tracks: state => {
            return state.tracks;
        },

        playerWon: state => {
            return state.playerWon;
        },

        playerScore: state => {
            return state.userScore;
        },

        computerScore: state => {
            return state.computerScore;
        }
    }
})