import React from "react";

function WalletConnect({ onConnect }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <button onClick={onConnect}>🔗 Connect Wallet</button>
    </div>
  );
}

export default WalletConnect;
