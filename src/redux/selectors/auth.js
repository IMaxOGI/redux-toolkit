import { createSelector } from "@reduxjs/toolkit";

export const getCurrentState = createSelector(
  (state) => state.auth,
  (state) => state
);
