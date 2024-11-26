import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, disabled, onClick }: IButtonProps) => {
  console.log(disabled);
  return <ButtonContainer disabled={disabled} onClick={onClick}>{title}</ButtonContainer>;
};

export default Button;
