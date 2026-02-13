import {createSlice} from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { MoodEntry } from "./moodTypes"
import {Mood} from "./moodTypes"

interface MoodState {
    entries: MoodEntry[];
    filter: Mood | "ALL";
}

const initialState: MoodState = {
    entries: [],
    filter: "ALL",
}

const moodSlice = createSlice({
    name: "mood",
    initialState,
    reducers: {
        addEntry: (state, action: PayloadAction<MoodEntry>) => {
            state.entries.unshift(action.payload);
        },

        setFilter: (state, action: PayloadAction<Mood | "ALL">) => {
            state.filter = action.payload;
        },
    },
});

export const { addEntry, setFilter } = moodSlice.actions;
export default moodSlice.reducer;