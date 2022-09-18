import Input from '../input/Input';
import classes from './Header.module.css';

function Header(props) {
  function enteredIp(ipAddress) {
    console.log(ipAddress);
  }

  return (
    <header className={classes.header}>
      <h1>IP Address Tracker</h1>
      <Input
        type="text"
        placeholder="Search for any IP address or domain"
        onEnteredIp={enteredIp}
      ></Input>
      {props.children}
    </header>
  );
}

export default Header;
