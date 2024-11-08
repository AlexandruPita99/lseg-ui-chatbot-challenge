import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { VscRobot } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io";

type ChatbotHeaderProps = {
  onClose: () => void;
};

const ChatbotHeader = ({ onClose }: ChatbotHeaderProps) => (
  <Box
    sx={(theme) => ({
      display: "flex",
      alignItems: "center",
      backgroundColor: theme.palette.primary.main,
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
      height: "48px",
      paddingInline: "8px",
    })}
  >
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <Box
          sx={(theme) => ({
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "100%",
            border: `2px solid ${theme.palette.common.white}`,
            padding: 0.5,
          })}
        >
          <VscRobot size={22} color="white" />
        </Box>
        <Typography
          sx={(theme) => ({
            color: theme.palette.common.white,
          })}
        >
          LSEG chatbot
        </Typography>
      </Box>

      <IconButton onClick={onClose}>
        <IoMdClose size={30} color="white" />
      </IconButton>
    </Box>
  </Box>
);

export default ChatbotHeader;
