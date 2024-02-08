import { calculateInvestmentResults } from "../util/investment";
import { formatter } from "../util/formatter";

export function Results({ userInput }) {
  const resultData = calculateInvestmentResults(userInput);
  const initialInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;

  console.log(resultData);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Rok</th>
          <th>Hodnota investice</th>
          <th>Úrok (roční)</th>
          <th>Celkový úrok</th>
          <th>Investovaný kapitál</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((yearData) => {
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;
          const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
