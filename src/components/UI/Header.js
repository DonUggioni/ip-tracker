import Input from '../input/Input';
import classes from './Header.module.css';

function Header(props) {
  return (
    <header className={classes.header}>
      <h1>IP Address Tracker</h1>

      {props.children}
    </header>
  );
}

export default Header;
