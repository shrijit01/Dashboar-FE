import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchWrapper } from '../helpers/fetchWrapper';


const name = 'users';
const initialState = createInitialState();
const extraActions = createExtraActions();
const slice = createSlice({ name, initialState });


export const userActions = { ...slice.actions, ...extraActions };
export const usersReducer = slice.reducer;



function createInitialState() {
    return {
        list: null,
        item: null
    }
}

function createExtraActions() {
    const baseUrl = `${process.env.REACT_APP_API_URL}/users`;

    return {
        register: register()
    };

    function register() {
        return createAsyncThunk(
            `${name}/register`,
            async (user) => await fetchWrapper.post(`${baseUrl}/register`, user)
        );
    }         
  
}