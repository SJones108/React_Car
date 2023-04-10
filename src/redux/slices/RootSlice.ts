import { createSlice } from "@reduxjs/toolkit"

const rootSlice = createSlice({
    name: "root",
    initialState: {
        car_make: 'Make',
        car_model: 'Model',
        car_year: 'Year',
        car_color: 'Color',
    },
    // linking pieces together
    // Setting the input to the state.name
    reducers: {
        chooseMake:  (state, action) => { state.car_make = action.payload },
        chooseModel: (state, action) => { state.car_model = action.payload },
        chooseYear:  (state, action) => { state.car_year = action.payload },
        chooseColor: (state, action) => { state.car_color = action.payload },
    }
})

// taking code above, and exporting
export const reducer = rootSlice.reducer;
export const { chooseMake, chooseModel, chooseYear, chooseColor } = rootSlice.actions