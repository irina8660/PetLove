import type { RootState } from "../store";

export const selectModalOpen = (state: RootState) => state.modal.isOpen;

export const selectModalType = (state: RootState) => state.modal.type;

export const selectModalPayload = (state: RootState) => state.modal.payload;
