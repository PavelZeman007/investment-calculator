import logo from "../assets/investment-calculator-logo.png";

export function Header() {
  return (
    <header id="header">
      <img src={logo} alt="money bag logo" />
      <h1>Investiční kalkulačka</h1>
    </header>
  );
}
