import Anchor from "../../UI/Anchor/Anchor";
import Card from "../../UI/Card/Card";
import Icons from "../../UI/Icons/Icons";

const ContactInfos = (props) => {
  return <Card className={props.className}>{props.children}</Card>;
};
export default ContactInfos;

export const ContactAddress = (props) => {
  return (
    <div className={props.className}>
      <Icons icons={props.icon} />
      <Anchor href={props.href}>{props.anchorlink}</Anchor>
    </div>
  );
};
