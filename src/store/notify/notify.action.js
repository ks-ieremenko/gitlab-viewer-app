import NotifierCloseButton from "../../components/NotifierCloseButton";

export const ENQUEUE_SNACKBAR = "ENQUEUE_SNACKBAR";
export const CLOSE_SNACKBAR = "CLOSE_SNACKBAR";
export const REMOVE_SNACKBAR = "REMOVE_SNACKBAR";

export const enqueueSnackbar = (message, variant) => {
  return {
    type: ENQUEUE_SNACKBAR,
    notification: {
      message,
      options: {
        variant,
        action: (key) => <NotifierCloseButton notifierKey={key} />,
      },
      key: new Date().getTime() + Math.random(),
    },
  };
};

export const closeSnackbar = (key) => {
  return {
    type: CLOSE_SNACKBAR,
    dismissAll: !key,
    key,
  };
};

export const removeSnackbar = (key) => ({
  type: REMOVE_SNACKBAR,
  key,
});
