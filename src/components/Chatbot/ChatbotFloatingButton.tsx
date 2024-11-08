import { useState } from "react";
import Fab from "@mui/material/Fab";
import { VscRobot } from "react-icons/vsc";

import Chatbot from "./Chatbot";

const ChatbotFloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnOpen = () => {
    setIsOpen(true);
  };

  const handleOnClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return (
      <Fab
        sx={(theme) => ({
          position: "fixed",
          bottom: 10,
          right: 10,
          borderRadius: 4,
          cursor: "pointer",
          backgroundColor: theme.palette.primary.main,
          "&:hover": {
            backgroundColor: theme.palette.primary.dark,
          },
        })}
        onClick={handleOnOpen}
      >
        <VscRobot size={30} color="white" />
      </Fab>
    );
  }

  return <Chatbot onClose={handleOnClose} />;
};

export default ChatbotFloatingButton;
