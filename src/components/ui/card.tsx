import { CardProps, Card as AntdCard } from "antd";

interface Props extends CardProps {}

const Card = (props: Props) => {
  return <AntdCard {...props} />;
};

const { Grid, Meta } = AntdCard;
export { Card, Grid, Meta };
