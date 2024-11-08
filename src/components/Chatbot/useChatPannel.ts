import { useEffect, useRef, useState } from "react";

import ChatbotStockDataDto from "../../dtos/ChatbotStockDataDto";
import getStockData from "../../services/api/stock.service";
import {
  getStockExchangeData,
  getStockExchangeTopStocks,
} from "../../services/api/stockExchange.service";
import { ChatMessage, ChatOptionName } from "./chatbot.types";
import {
  ChatbotMenuItems,
  createBotConversation,
  createErrorBotConversation,
  createLoadingBotConversation,
  createUserConversation,
} from "./chatbot.utils";

const useChatPannel = () => {
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [data, setData] = useState<ChatbotStockDataDto[]>([]);
  const [currentStockExchange, setCurrentStockExchange] = useState<
    string | null
  >(null);
  const [isLoading, setIsLoading] = useState(false);
  const dummyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const stockExchangeData = await getStockExchangeData();
        setData(stockExchangeData);
        setChatHistory([
          createBotConversation("Please select a Stock Exchange.", {
            name: "stockExchange",
            options: stockExchangeData.map((value) => ({
              id: value.code,
              name: value.stockExchange,
            })),
          }),
        ]);
      } catch (error) {
        setChatHistory([createErrorBotConversation()]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      setData([]);
      setChatHistory([]);
      setCurrentStockExchange(null);
    };
  }, []);

  useEffect(() => {
    if (isLoading) {
      setChatHistory((prev) => [...prev, createLoadingBotConversation()]);
    } else {
      setChatHistory((prev) =>
        prev.filter((value) => value.chatOption?.name !== "loading")
      );
    }
  }, [isLoading]);

  useEffect(() => {
    if (dummyRef.current) {
      dummyRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatHistory]);

  const handleStockExchangeClick = async (
    stockExchangeCode: string,
    stockExchangeName: string
  ) => {
    setCurrentStockExchange(stockExchangeCode);
    setChatHistory((prev) => [
      ...prev,
      createUserConversation(stockExchangeName),
    ]);

    try {
      setIsLoading(true);
      const topStocks = await getStockExchangeTopStocks(stockExchangeCode);

      setChatHistory((prev) => [
        ...prev,
        createBotConversation("Please select a stock.", {
          name: "stock",
          options: topStocks.map((stock) => ({
            id: stock.code,
            name: stock.stockName,
          })),
        }),
      ]);
    } catch (error) {
      setChatHistory((prev) => [...prev, createErrorBotConversation()]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleStockClick = async (stockCode: string, stockName: string) => {
    setChatHistory((prev) => [...prev, createUserConversation(stockName)]);

    try {
      setIsLoading(true);
      const stock = await getStockData(currentStockExchange!, stockCode);

      if (stock) {
        const stockData = `Stock Price of ${
          stock.stockName
        } is ${stock.price.toFixed(2)}. Please select an option.`;

        setChatHistory((prev) => [
          ...prev,
          createBotConversation(stockData, {
            name: "menu",
            options: ChatbotMenuItems,
          }),
        ]);
      } else {
        setChatHistory((prev) => [
          ...prev,
          createBotConversation(
            `We could not find any data about ${stockName}!`
          ),
        ]);
      }
    } catch (error) {
      setChatHistory((prev) => [...prev, createErrorBotConversation()]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleMainMenuClick = async (menuItemCode: string) => {
    if (menuItemCode === "menu") {
      setCurrentStockExchange(null);
      setChatHistory((prev) => [
        ...prev,
        createUserConversation("Main Menu"),
        createBotConversation("Please select a Stock Exchange.", {
          name: "stockExchange",
          options: data.map((value) => ({
            id: value.code,
            name: value.stockExchange,
          })),
        }),
      ]);

      return;
    }

    try {
      setIsLoading(true);
      const topStocks = await getStockExchangeTopStocks(currentStockExchange!);

      setChatHistory((prev) => [
        ...prev,
        createBotConversation("Please select a stock.", {
          name: "stock",
          options: topStocks.map((stock) => ({
            id: stock.code,
            name: stock.stockName,
          })),
        }),
      ]);
    } catch (error) {
      setChatHistory((prev) => [...prev, createErrorBotConversation()]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOptionClick = (optionName: ChatOptionName) => {
    if (optionName === "stockExchange") {
      return handleStockExchangeClick;
    }

    if (optionName === "stock") {
      return handleStockClick;
    }

    return handleMainMenuClick;
  };

  return {
    chatHistory,
    handleOptionClick,
    dummyRef,
  };
};

export default useChatPannel;
