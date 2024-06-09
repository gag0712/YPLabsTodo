import {MutableRefObject} from 'react';
import {OpenDialogProps} from './Dialog';

export type CustomModalRef = {
  show: (obj?: OpenDialogProps) => void;
  hide: () => void;
};

export default class DialogController {
  static modalRef: MutableRefObject<CustomModalRef>;
  static setModalRef = (ref: any) => {
    this.modalRef = ref;
  };

  static showDialog = (obj?: OpenDialogProps) => {
    this.modalRef.current?.show(obj);
  };

  static hideDialog = () => {
    this.modalRef.current?.hide();
  };
}

export const showDialog = DialogController.showDialog;
export const hideDialog = DialogController.hideDialog;
