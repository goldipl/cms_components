import { Divider } from "@/components/ui/divider";
import { Text, Title, Typography } from "@/components/ui/typography";
import { SideCardSubtitle } from "@/features/article/edit-article/menu-side-cards/components";
import { theme } from "antd";

const InformationLine = ({
  title,
  value,
  divider,
}: {
  title: string;
  value: string;
  divider?: boolean;
}) => {
  return (
    <>
      <SideCardSubtitle title={title}>
        <Text>{value}</Text>
      </SideCardSubtitle>
      {divider && <Divider style={{ marginTop: 10 }} />}
    </>
  );
};

interface Props {}

export const InformationOption = (props: Props) => {
  return (
    <div>
      <InformationLine
        title="Wszystkie kategorie"
        value="Article Title"
        divider
      />
      <InformationLine
        title="Ostatnia edycja"
        value="Article Description"
        divider
      />
      <InformationLine title="UID" value="Article Tags" divider />
      <InformationLine title="Data publikacji" value="Article Tags" />
    </div>
  );
};
