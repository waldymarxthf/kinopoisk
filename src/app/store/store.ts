import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import filterReducer from "~features/navbar/model/slice";
import { filmsByQueryReducer } from "~features/search-film/model/slice";
import { sessionReducer } from "~shared/model/session/slice";
import { filmsReducer } from "~widgets/films-gallery/model/slice";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    filmsData: filmsReducer,
    filmsByQuery: filmsByQueryReducer,
    session: sessionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
