import React from "react";
import WalletConnect from "./src/WalletConnect";
import swapLogic from "./src/swapLogic";

export default function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>ZenChain Cross-Chain Swap Demo</h1>
      <WalletConnect />
      <div style={{ marginTop: "20px" }}>
        <button onClick={() => swapLogic("ETH", "BTC", 0.5)}>
          Swap 0.5 ETH to BTC
        </button>
      </div>
    </div>
  );
}
