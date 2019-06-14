import React from "react";
import { Card, Icon } from "semantic-ui-react";

const extra = (
  <a>
    <Icon name="user" />
    16 Friends
  </a>
);

const CardExampleCardProps = () => (
  <Card
    image="https://image.flaticon.com/icons/svg/147/147144.svg"
    header="Elliot Baker"
    meta="Friend"
    description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
    extra={extra}
  />
);

export default CardExampleCardProps;
