import { css } from 'emotion';
import theme from '../../theme';

const buttonStyle = css`
  background-color: ${theme.buttonColor};
  color: ${theme.buttonTextColor};
  border-radius: 5px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  cursor: pointer;
`;

export default buttonStyle;
