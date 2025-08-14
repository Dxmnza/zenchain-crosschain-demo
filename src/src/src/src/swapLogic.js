export function performSwapLogic(balances, from, to, amount) {
  if (amount <= 0 || amount > balances[from]) {
    return { success: false, message: "❌ Invalid swap amount." };
  }

  const updatedBalances = {
    ...balances,
    [from]: balances[from] - amount,
    [to]: balances[to] + amount * 0.99, // mock 1% fee
  };

  return {
    success: true,
    message: `✅ Swapped ${amount} ${from} to ${to}`,
    balances: updatedBalances,
  };
}
