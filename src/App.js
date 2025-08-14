import React, { useState } from "react";

function App() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [balances, setBalances] = useState({
    ethereum: 1.5,
    bitcoin: 0.05,
    zenchain: 200
  });
  const [message, setMessage] = useState("");

  const connectWallet = () => {
    setWalletConnected(true);
    setMessage("✅ Wallet connected!");
  };

  const performSwap = (from, to, amount) => {
    if (amount <= 0 || amount > balances[from]) {
      setMessage("❌ Invalid swap amount.");
      return;
    }

    setBalances(prev => ({
      ...prev,
      [from]: prev[from] - amount,
      [to]: prev[to] + amount * 0.99 // mock 1% fee
    }));

    setMessage(`🔄 Swapped ${amount} ${from} to ${to}`);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>ZenChain Cross-Chain Swap Demo</h1>
      {!walletConnected ? (
        <button onClick={connectWallet}>Connect Wallet</button>
      ) : (
        <>
          <h3>Balances</h3>
          <ul>
            <li>Ethereum: {balances.ethereum}</li>
            <li>Bitcoin: {balances.bitcoin}</li>
            <li>ZenChain: {balances.zenchain}</li>
          </ul>
          <button onClick={() => performSwap("ethereum", "zenchain", 0.5)}>
            Swap 0.5 ETH → ZEN
          </button>
        </>
      )}
      <p>{message}</p>
    </div>
  );
}

export default App;
