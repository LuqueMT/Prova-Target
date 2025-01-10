// Valores de faturamento mensal
const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};
  
  // Calcular faturamento total
  const total = Object.values(faturamento).reduce((soma, valor) => soma + valor, 0);
  
  // Calcular percentual de cada estado
  const percentuais = {};
  for (const [estado, valor] of Object.entries(faturamento)) {
    percentuais[estado] = ((valor / total) * 100).toFixed(2);
}
  
  // Imprimir resultados
  console.log("Faturamento total: R$", total.toFixed(2));
  console.log("Percentuais de representação:");
  for (const [estado, percentual] of Object.entries(percentuais)) {
    console.log(`${estado}: ${percentual}%`);
}
  