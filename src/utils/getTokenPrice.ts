// utils/getTokenPrice.ts
export const getTokenPrice = async (tokenId: string): Promise<string> => {
  try {
    const res = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${tokenId}&vs_currencies=usd`);
    const data = await res.json();
    if (data[tokenId]?.usd) {
      return `💰 The current price of ${tokenId.toUpperCase()} is $${data[tokenId].usd} USD.`;
    }
    return "❌ Couldn't find price for that token.";
  } catch {
    return "⚠️ Failed to fetch token price. Try again later.";
  }
};
