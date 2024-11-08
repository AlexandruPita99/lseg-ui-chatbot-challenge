import Box from "@mui/material/Box";

import BotConversation from "./BotConversation";
import BotOptions from "./BotOptions";
import useChatPannel from "./useChatPannel";
import UserConversation from "./UserConversation";

const ChatPannel = () => {
  const { chatHistory, handleOptionClick, dummyRef } = useChatPannel();

  return (
    <Box
      sx={{
        padding: "16px 8px",
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        gap: 2,
        overflowY: "auto",
      }}
    >
      <BotConversation
        displayIcon={false}
        text="Hello! Welcome to LSEG. I'm here to help you."
      />
      {chatHistory.map((chatMessage) => {
        if (chatMessage.role === "user") {
          return (
            <UserConversation key={chatMessage.id} text={chatMessage.text} />
          );
        }

        if (chatMessage.chatOption?.options?.length) {
          return (
            <BotConversation key={chatMessage.id} text={chatMessage.text}>
              <BotOptions
                options={chatMessage.chatOption.options}
                onOptionClick={handleOptionClick(chatMessage.chatOption.name)}
                optionsDisabled={
                  chatHistory[chatHistory.length - 1].id !== chatMessage.id
                }
              />
            </BotConversation>
          );
        }

        return (
          <BotConversation
            key={chatMessage.id}
            text={chatMessage.text}
            isLoading={chatMessage.chatOption?.name === "loading"}
          />
        );
      })}
      <div ref={dummyRef}></div>
    </Box>
  );
};

export default ChatPannel;
