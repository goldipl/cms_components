import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Item, List } from "@/components/ui/list";
import { Typography } from "@/components/ui/typography";
import { getInitials } from "@/utils/get-initials";
import { theme } from "antd";
import { Key, useState } from "react";

const data = Array.from({ length: 20 }).map((_, index) => ({
  key: index,
  title: `${index}.03.2024`,
  author: `John Doe ${index}`,
  time: `${index}:00`,
}));

interface Props {}

const HistoryListItem = ({
  selected,
  author,
  title,
  onClick,
  time,
}: {
  selected?: boolean;
  onClick: () => void;
  title: string;
  author: string;
  time: string;
}) => {
  const { token } = theme.useToken();
  return (
    <Item
      style={{
        ...(selected && {
          backgroundColor: token.colorPrimaryBg,
        }),
        borderLeft: `2px solid ${
          !selected ? "transparent" : token.colorPrimary
        }`,
        padding: 12,
        cursor: "pointer",
      }}
      onClick={() => onClick()}
    >
      <Avatar style={{ background: token.colorPrimary }}>
        {getInitials(author)}
      </Avatar>
      <Item.Meta
        style={{ paddingLeft: 10 }}
        title={title}
        description={
          <Typography
            color={selected ? "colorTextSecondary" : "colorTextDescription"}
          >
            {author}
          </Typography>
        }
      />
      {selected && (
        <Button type="link" size="small" style={{ alignSelf: "start" }}>
          przywróć wersję
        </Button>
      )}
      <div style={{ alignSelf: "start", paddingLeft: 10 }}>{time}</div>
    </Item>
  );
};

export const VersionHistoryOption = (props: Props) => {
  const [selected, setSelected] = useState<number | null>(null);
  return (
    <List<(typeof data)[0]>
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item, index) => (
        <HistoryListItem
          selected={index === selected}
          key={index}
          onClick={() => setSelected(index)}
          title={item.title}
          author={item.author}
          time={item.time}
        />
      )}
    />
  );
};
