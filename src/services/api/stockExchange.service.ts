import stockData from "../../data/Chatbot - stock data.json";
import ChatbotStockDataDto from "../../dtos/ChatbotStockDataDto";
import StockEntity from "../../models/Stock.entity";
import getRandomPromiseFailure from "../../utils/getRandomPromiseFailure";
import getRandomWaitingTime from "../../utils/getRandomWaitingTime";

const getStockExchangeData = async (): Promise<ChatbotStockDataDto[]> => {
  return new Promise((resolve, reject) => {
    const waitingTime = getRandomWaitingTime();

    setTimeout(() => {
      const isPromiseFailing = getRandomPromiseFailure();
      if (isPromiseFailing) {
        return reject();
      }

      return resolve(
        stockData.map((value) => ({
          code: value.code,
          stockExchange: value.stockExchange,
        }))
      );
    }, waitingTime);
  });
};

const getStockExchangeTopStocks = async (
  stockExchangeCode: string
): Promise<StockEntity[]> => {
  return new Promise((resolve, reject) => {
    const waitingTime = getRandomWaitingTime();

    setTimeout(() => {
      const isPromiseFailing = getRandomPromiseFailure();
      if (isPromiseFailing) {
        return reject();
      }

      const topStocks =
        stockData.find((value) => value.code === stockExchangeCode)
          ?.topStocks ?? [];

      return resolve(topStocks);
    }, waitingTime);
  });
};

export { getStockExchangeData, getStockExchangeTopStocks };
