import { MODALS } from "../constants/modals";

export type ModalKey = (typeof MODALS)[keyof typeof MODALS];

export type ModalProps = Record<string, unknown> | null;

export interface ModalState {
  isOpen: boolean;
  type: ModalKey | null;
  payload: ModalProps;
}
