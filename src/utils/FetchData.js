
import axios from "axios";

export const FetchData = async () => {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true"
    );
    const data = response.data.bitcoin;
    // console.log("the data fetched is", data)
    // console.log(response)
  } catch (err) {
    console.log(err);
  }
};

export const allData = async () => {
  try {
    const res = await axios.get(
      "https://api.coingecko.com/api/v3/coins/bitcoin"
    );
    const data = res;
    // console.log("full data is  :", data)
  } catch (err) {
    console.log(err);
  }
};

export const coinsData = async () => {
  try {
    const res = await axios.get(
      "https://api.coingecko.com/api/v3/search/trending"
    );

    // console.log(res.data.categories)
  } catch (err) {
    console.log(err);
  }
};
