interface Props {
  text: string;
}

const SignupErrorText = ({ text }: Props) => {
  return <p className="text-red text-xs font-normal web:text-sm">{text}</p>;
};

export default SignupErrorText;
