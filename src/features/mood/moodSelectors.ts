import type {RootState}  from "../../app/store";

// These selectors reach into the mood slice of your global state and grab the entries 
// If you ever move your data, you only change it here in selector not in 20 different components
export const selectAllEntries = (state: RootState) => 
    state.mood.entries;

export const selectFilter = (state: RootState) => 
    state.mood.filter;

export const selectFilterEntries = (state: RootState) => {
    const { entries, filter } = state.mood;

    if(filter === "ALL") return entries;

    return entries.filter((entry) => entry.mood === filter);
};