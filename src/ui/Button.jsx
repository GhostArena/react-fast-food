import { Link } from "react-router-dom";

const Button = ({ children, disabled, to, type }) => {
  const base =
    "inline-block font-semibold tracking-wide uppercase transition-colors duration-300 bg-yellow-400 rounded-full text-stone-800 hover:duration-300 focus:outline-none focus:ring disabled:cursor-not-allowed focus:ring-offset-2";
  const styles = {
    primary: base + "px-4 py-3 md:px-6 md:py-4",
    small: base + "px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary:
      "inline-block px-4 py-2 md:px-6 md:py-3.5 hover:bg-stone-300 focus:bg-stone-300 hover:text-stone-800 focus:ring-stone-400 font-semibold tracking-wide uppercase transition-colors duration-300 border-2 border-stone-300 rounded-full text-stone-800 hover:duration-300 focus:outline-none focus:ring disabled:cursor-not-allowed focus:ring-offset-2",
  };
  const className =
    "inline-block px-4 py-3 font-semibold tracking-wide uppercase transition-colors duration-300 bg-yellow-400 rounded-full text-stone-800 hover:duration-300 focus:outline-none focus:ring disabled:cursor-not-allowed focus:ring-offset-2 sm:px-6 sm:py-4";
  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  if (type === type) {
    return (
      <button disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
  }
  return (
    <button
      disabled={disabled}
      className="inline-block px-4 py-3 font-semibold tracking-wide uppercase transition-colors duration-300 bg-yellow-400 rounded-full text-stone-800 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 disabled:cursor-not-allowed focus:ring-offset-2 sm:px-6 sm:py-4"
    >
      {children}
    </button>
  );
};

export default Button;
