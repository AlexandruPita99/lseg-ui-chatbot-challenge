import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { IoMdArrowDropright } from "react-icons/io";

const ChatFooter = () => {
  const theme = useTheme();

  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.palette.grey[200],
        minHeight: "48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingInline: 2,
      })}
    >
      <Typography
        sx={(theme) => ({
          color: theme.palette.grey[600],
        })}
      >
        Please pick an option.
      </Typography>

      <IoMdArrowDropright size={22} color={theme.palette.grey[600]} />
    </Box>
  );
};

export default ChatFooter;
