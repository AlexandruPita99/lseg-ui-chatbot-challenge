import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { VscRobot } from "react-icons/vsc";
import { PulseLoader } from "react-spinners";

type BotConversationProps = {
  displayIcon?: boolean;
  text: string;
  children?: React.ReactNode;
  isLoading?: boolean;
};

const BotConversation = ({
  displayIcon = true,
  text,
  children,
  isLoading = false,
}: BotConversationProps) => {
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex", gap: 1 }}>
      <Box
        sx={{
          width: "20px",
          height: "20px",
          alignSelf: "end",
        }}
      >
        {displayIcon && (
          <VscRobot size={22} color={theme.palette.primary.main} />
        )}
      </Box>
      <Box
        sx={(theme) => ({
          display: "flex",
          flexDirection: "column",
          gap: 1,
          backgroundColor: theme.palette.secondary.main,
          width: "fit-content",
          padding: "12px 8px",
          borderRadius: 1,
        })}
      >
        {isLoading ? (
          <Box
            sx={{
              display: "flex",
              gap: 1,
            }}
          >
            <Typography>{text}</Typography>
            <Box
              sx={{
                alignSelf: "end",
              }}
            >
              <PulseLoader size={5} />
            </Box>
          </Box>
        ) : (
          <>
            <Typography>{text}</Typography>
            {children}
          </>
        )}
      </Box>
    </Box>
  );
};

export default BotConversation;
