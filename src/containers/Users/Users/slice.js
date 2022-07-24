/* eslint-disable no-param-reassign */
/*
 * HackerNewsArticles Slice
 *
 * Here we define:
 * - The shape of our container's slice of Redux store,
 * - All the actions which can be triggered for this slice, including their effects on the store.
 *
 * Note that, while we are using dot notation in our reducer, we are not actually mutating the state
 * manually. Under the hood, we use immer to apply these updates to a new copy of the state.
 * Please see https://immerjs.github.io/immer/docs/introduction for more information.
 *
 */

import { createSlice } from "@reduxjs/toolkit";
import {toast} from "react-toastify";

// The initial state of the ReposManager container
export const initialState = {
    data: [],
    loading: false,
    error: false,
    singleUser: null,
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        fetch(state) {
            state.loading = true;
            state.error = false;
            state.data = [];
        },
        fetchSuccess(state, action) {
            state.data = action.payload.data;
            state.loading = false;
        },
        saveUsers() {},
        deleteUsers() {
        },
        singleUser(state, action) {
            state.loading = true;
            state.error = false;
            state.singleUser=null
        },
        updateUser() {},
        fetchFailure(state, action) {
            state.error = action.payload;
            state.loading = false;
        },
        fetchSingleUserSuccess(state, action) {
            state.singleUser = action.payload.data;
            state.loading = false;
        },
        
    },
});

export const { name, actions, reducer } = usersSlice;
