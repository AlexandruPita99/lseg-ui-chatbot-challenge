import stockData from "../../data/Chatbot - stock data.json";
import StockEntity from "../../models/Stock.entity";
import getRandomPromiseFailure from "../../utils/getRandomPromiseFailure";
import getRandomWaitingTime from "../../utils/getRandomWaitingTime";

const getStockData = async (
  stockExchangeCode: string,
  stockCode: string
): Promise<StockEntity | null> => {
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

      const stock = topStocks.find((value) => value.code === stockCode) ?? null;

      return resolve(stock);
    }, waitingTime);
  });
};

export default getStockData;
