import PropTypes from "prop-types";
import React from "react";
import { withTheme } from "theming";
import theme from "../../theme";
import buttonStyle from "./style";

const Button = ({ children, onClick, disabled, theme }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={buttonStyle}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  /**
   * onClick Function
   */
  onClick: PropTypes.func,
  /**
   * Children
   */
  children: PropTypes.element,
  /**
   * disabled
   */
  disabled: PropTypes.bool,
  /**
   * Themes
   */
  theme: PropTypes.objectOf(PropTypes.string)
};

Button.defaultProps = {
  disabled: false,
  children: "",
  onClick: () => {},
  theme
};
export default withTheme(Button);
