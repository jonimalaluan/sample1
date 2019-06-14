import React from "react";
import faker from "faker";
import { Card, Icon, Image } from "semantic-ui-react";

const CardExampleImageCard = () => (
  <Card>
    <Image src={faker.internet.avatar()} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{faker.company.companyName()}</Card.Header>
      <Card.Meta>{faker.finance.amount(0, 100, 2, "$")}</Card.Meta>
      <Card.Description>{faker.company.catchPhrase()}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name="user" />
        10 Friends
      </a>
    </Card.Content>
  </Card>
);

export default CardExampleImageCard;

// import React from "react";
// import faker from "faker";
// import { Card, Icon } from "semantic-ui-react";

// const CardExampleCardProps = () => (
//   <Card
//     image={faker.internet.avatar()}
//     title={faker.company.companyName()}
//     price={faker.finance.amount(0, 100, 2, "$")}
//     description={faker.company.catchPhrase()}
//   />
// );

// export default CardExampleCardProps;
// //
