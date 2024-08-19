import { PageContainer } from "@/components/ui/page/page-container";
import { PageSubtitle, PageTitle } from "@/components/ui/page/page-title";
import { Card } from "@/components/ui/card";
import { Segmented } from "@/components/ui/segmented";
import { Col, Row, Typography } from "antd";

interface Props {}

const TemplateCard = ({
  title,
  subititle,
}: {
  title: string;
  subititle?: string;
}) => {
  return (
    <Card
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        aspectRatio: "1 / 1",
      }}
    >
      <Typography style={{ fontWeight: "bold", textAlign: "center" }}>
        <Typography.Text>{title}</Typography.Text>
      </Typography>
      {!!subititle && (
        <Typography style={{ textAlign: "center" }}>
          <Typography.Text>{subititle}</Typography.Text>
        </Typography>
      )}
    </Card>
  );
};

export const EditArticleIndex = (props: Props) => {
  return (
    <PageContainer
      TitleComponent={<PageTitle title="Edytor" />}
      SubtitleComponent={<PageSubtitle title="Szablony artykułów" />}
    >
      <Segmented
        style={{ marginBottom: 20 }}
        options={[
          {
            value: 1,
            label: "Ulubione",
          },
          {
            value: 2,
            label: "Ostatnie",
          },
          {
            value: 3,
            label: "Ostatnie",
          },
          {
            value: 4,
            label: "Ostatnie",
          },
          {
            value: 5,
            label: "Ostatnie",
          },
        ]}
      />
      <Row gutter={20}>
        <Col span={6}>
          <TemplateCard title="Szablon 1" subititle="Opis szablonu" />
        </Col>
      </Row>
    </PageContainer>
  );
};
