import {
  ENQUEUE_SNACKBAR,
  CLOSE_SNACKBAR,
  REMOVE_SNACKBAR,
} from "./notify.action";

const defaultState = {
  notificationsList: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case ENQUEUE_SNACKBAR:
      return {
        ...state,
        notificationsList: [
          ...state.notificationsList,
          {
            key: action.key,
            ...action.notification,
          },
        ],
      };

    case CLOSE_SNACKBAR:
      return {
        ...state,
        notificationsList: state.notificationsList.map((notification) => {
          return {
            ...notification,
            dismissed: action.dismissAll || notification.key === action.key,
          };
        }),
      };

    case REMOVE_SNACKBAR:
      return {
        ...state,
        notificationsList: state.notificationsList.filter(
          (notification) => notification.key !== action.key
        ),
      };

    default:
      return state;
  }
};
