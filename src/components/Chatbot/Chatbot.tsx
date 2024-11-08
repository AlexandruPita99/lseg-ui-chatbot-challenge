import Paper from "@mui/material/Paper";

import ChatbotHeader from "./ChatbotHeader";
import ChatFooter from "./ChatFooter";
import ChatPannel from "./ChatPannel";

type ChatbotProps = {
  onClose: () => void;
};

const Chatbot = ({ onClose }: ChatbotProps) => {
  return (
    <Paper
      elevation={3}
      sx={(theme) => ({
        position: "fixed",
        bottom: 10,
        right: 10,
        display: "flex",
        flexDirection: "column",
        borderRadius: 4,
        height: "66%",
        width: "75%",
        [theme.breakpoints.up("md")]: {
          width: "500px",
        },
      })}
    >
      <ChatbotHeader onClose={onClose} />

      <ChatPannel />

      <ChatFooter />
    </Paper>
  );
};

export default Chatbot;
