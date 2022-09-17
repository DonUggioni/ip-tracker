import Input from '../input/Input';
import ResultsDisplay from '../resultsDisplay/ResultsDisplay';
import classes from './Header.module.css';

function Header() {
  return (
    <header className={classes.header}>
      <h1>IP Address Tracker</h1>
      <Input
        type="text"
        placeholder="Search for any IP address or domain"
      ></Input>
      <ResultsDisplay />
    </header>
  );
}

export default Header;
