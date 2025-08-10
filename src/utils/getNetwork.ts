import { ethers } from "ethers";

export const getNetworkName = async (): Promise<string> => {
  try {
    if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const network = await provider.getNetwork();
      return `📡 You are connected to ${network.name.toUpperCase()} (${network.chainId}).`;
    } else {
      return "⚠️ MetaMask not available.";
    }
  } catch {
    return "❌ Could not detect network.";
  }
};
