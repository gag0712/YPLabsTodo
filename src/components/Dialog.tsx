import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import ModalController from './DialogController';
import {DialogView} from './DialogView';

export type OpenDialogProps =
  | {
      id: number;
      content: string;
    }
  | undefined;

export type CustomModalRef = {
  show: (props: OpenDialogProps) => void;
  hide: () => void;
};

const Dialog = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const modalRef = useRef<CustomModalRef>();
  const [data, setData] = useState<OpenDialogProps>();
  const [todoContent, setTodoContent] = useState('');
  const [todoId, setTodoId] = useState(0);

  useEffect(() => {
    if (data) {
      setTodoContent(data.content);
      setTodoId(data.id);
    }
  }, [data]);

  useLayoutEffect(() => {
    ModalController.setModalRef(modalRef);
  }, []);

  useImperativeHandle(
    modalRef,
    () => ({
      show: (obj: OpenDialogProps) => {
        setModalVisible(true);
        setData(obj);
      },
      hide: () => {
        setModalVisible(false);
      },
    }),
    [],
  );

  const closeModal = () => {
    setTodoContent('');
    setModalVisible(false);
  };

  const onPressSave = () => {
    if (!todoContent) {
      return;
    }
    if (todoId) {
      // update todo
      return;
    }
    // post todo
  };

  const props = {
    modalVisible: modalVisible,
    closeModal: closeModal,
    todoContent: todoContent,
    setTodoContent: setTodoContent,
    onPressSave: onPressSave,
  };

  return <DialogView {...props} />;
};

export default forwardRef(Dialog);
