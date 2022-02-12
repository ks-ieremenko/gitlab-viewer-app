import React from "react";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";

import { closeSnackbar } from "../store/notify/notify.action";

const NotifierCloseButton = ({ notifierKey }) => {
  const dispatch = useDispatch();

  return (
    <Button
      onClick={() => {
        dispatch(closeSnackbar(notifierKey));
      }}
    >
      Close me
    </Button>
  );
};
export default NotifierCloseButton;
