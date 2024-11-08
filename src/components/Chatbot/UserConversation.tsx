import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type UserConversationProps = {
  text: string;
};

const UserConversation = ({ text }: UserConversationProps) => (
  <Box
    sx={{
      width: "100%",
    }}
  >
    <Box
      sx={(theme) => ({
        display: "flex",
        justifySelf: "end",
        backgroundColor: theme.palette.grey[200],
        width: "fit-content",
        padding: 2,
        borderRadius: 1,
      })}
    >
      <Typography>{text}</Typography>
    </Box>
  </Box>
);

export default UserConversation;
