import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ReactComponent as ArrowSvg } from "./assets/arrow-curved-svgrepo-com.svg";

import ChatbotFloatingButton from "./components/Chatbot/ChatbotFloatingButton";

const App = () => (
  <main>
    <Box
      sx={{
        height: "100vh",
        position: "relative",
        display: "grid",
        placeItems: "center",
        justifyItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h3">Hello! Please use our chatbot! 😊</Typography>
        <ArrowSvg
          style={{
            width: "200px",
            height: "100px",
            transform: "rotate(30deg)",
          }}
        />
      </Box>
      <ChatbotFloatingButton />
    </Box>
  </main>
);

export default App;
