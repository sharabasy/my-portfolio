import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: localStorage.getItem("language") || "en",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    toggleLanguage: (state) => {
      const newLang = state.language === "en" ? "ar" : "en";
      localStorage.setItem("language", newLang);
      return { ...state, language: newLang };
    },
  },
});

export const { toggleLanguage } = languageSlice.actions;
export default languageSlice.reducer;
