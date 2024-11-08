import { ChatbotMenuOption, ChatMessage, ChatOption } from "./chatbot.types";

const generateId = () => new Date().getTime().toString();

export const createUserConversation = (text: string): ChatMessage => ({
  id: generateId(),
  role: "user",
  text,
});

export const createBotConversation = (
  text: string,
  chatOption?: ChatOption
): ChatMessage => ({
  id: generateId(),
  role: "chatbot",
  text,
  chatOption,
});

export const createErrorBotConversation = () =>
  createBotConversation("Oops! An error occurred. Please try again later!");

export const createLoadingBotConversation = () =>
  createBotConversation("Loading", {
    name: "loading",
  });

export const ChatbotMenuItems: ChatbotMenuOption[] = [
  {
    id: "menu",
    name: "Main Menu",
  },
  {
    id: "back",
    name: "Go Back",
  },
];
