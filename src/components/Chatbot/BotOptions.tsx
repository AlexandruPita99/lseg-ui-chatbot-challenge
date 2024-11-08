import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { Option } from "./chatbot.types";

type BotOptionsProps = {
  options: Option[];
  onOptionClick: (code: string, name: string) => Promise<void>;
  optionsDisabled?: boolean;
};

const BotOptions = ({
  options,
  onOptionClick,
  optionsDisabled = true,
}: BotOptionsProps) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      gap: 1,
    }}
  >
    {options.map((option) => (
      <Button
        key={option.id}
        sx={(theme) => ({
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: "250px",
          height: "40px",
          backgroundColor: theme.palette.common.white,
          textTransform: "none",
        })}
        disabled={optionsDisabled}
        onClick={() => {
          onOptionClick(option.id, option.name);
        }}
      >
        {option.name}
      </Button>
    ))}
  </Box>
);

export default BotOptions;
