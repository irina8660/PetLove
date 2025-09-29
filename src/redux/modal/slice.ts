import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ModalKey, ModalProps, ModalState } from "../../types/modals";

const initialState: ModalState = {
  isOpen: false,
  type: null,
  payload: null,
};

interface OpenModalPayload {
  type: ModalKey;
  payload?: ModalProps;
}

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<OpenModalPayload>) => {
      state.isOpen = true;
      state.type = action.payload.type;
      state.payload = action.payload.payload || null;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.type = null;
      state.payload = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
