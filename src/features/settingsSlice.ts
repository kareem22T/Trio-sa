import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from "axios"
import { API_URL } from '../_env';


// Initial State
interface SettingsState {
    showNav: boolean
}

const initialState: SettingsState = {
    showNav: false
};

// Create Slice
const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setShowNav: (state) => {
            state.showNav = !state.showNav;
        },
    },
});
export const { setShowNav } = settingsSlice.actions;

export default settingsSlice.reducer;
