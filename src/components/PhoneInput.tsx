import "react-phone-number-input/style.css";
import Input from "../base/Input.base";
import PhoneInputBase, {
  Props,
  DefaultInputComponentProps,
} from "react-phone-number-input";

export interface PhoneInputProps extends Props<DefaultInputComponentProps> {}

export const PhoneInput = ({ value, onChange, ...props }: PhoneInputProps) => {
  return (
    <PhoneInputBase
      {...props}
      defaultCountry="ES"
      countryCallingCodeEditable={false}
      value={value}
      onChange={onChange}
    />
  );
};
