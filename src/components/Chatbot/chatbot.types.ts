export type Option = {
  id: string;
  name: string;
};

export type ChatbotMenuOption = {
  id: "menu" | "back";
  name: string;
};

export type ChatOptionName = "stockExchange" | "stock" | "menu" | "loading";

export type ChatOption = {
  name: ChatOptionName;
  options?: Option[];
};

export type ChatMessage = {
  id: string;
  role: "user" | "chatbot";
  text: string;
  chatOption?: ChatOption;
  loading?: boolean;
};
