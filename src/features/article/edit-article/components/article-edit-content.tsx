import { FormTextArea } from "@/components/form/form-textarea";
import { TextBox } from "@/components/text-editor/text-box";
import { useStyles } from "@/components/text-editor/text-box.styles";
import { Button } from "@/components/ui/button";
import { FormValues } from "@/features/article/edit-article/edit-article";
import { useFieldMeta } from "@/hooks/useFieldMeta";
import { Divider, Typography } from "antd";
import { memo } from "react";
import { useFormContext, useFormState, useWatch } from "react-hook-form";

const { Title, Paragraph, Text, Link } = Typography;
interface Props {}

const ValueSetter = memo(() => {
  const { resetField, setValue } = useFormContext<FormValues>();
  const onClick = () => {
    setValue("title", "new val");
  };
  return <Button onClick={onClick}>update title</Button>;
});

const MetaWatcher = () => {
  const { isTouched, isDirty, error } = useFieldMeta("title");
  return (
    <Typography>
      <Paragraph>{`is isTouched: ${isTouched}`}</Paragraph>
      <Paragraph>{`is Dirty: ${isDirty}`}</Paragraph>
      <Paragraph>{`error: ${error?.message}`}</Paragraph>
    </Typography>
  );
};

const ValueWatcher = () => {
  const { control } = useFormContext<FormValues>();

  const val = useWatch({ control, name: "title" });
  // const val = watch("title");
  return (
    <Typography>
      <Title level={1}>{`value: ${val}`}</Title>
    </Typography>
  );
};

export const ArticleEditContent = ({}: Props) => {
  return (
    <Typography>
      <Title>Introduction</Title>
      <TextBox placeholder="TUTAJ PISZ ŁOMŻA" />
      <Title level={2}>Guidelines and Resources</Title>
      <TextBox placeholder="tu nie pisz" bold />
      <ValueWatcher />
      <Paragraph>
        In the process of internal desktop applications development, many
        different design specs and implementations would be involved, which
        might cause designers and developers difficulties and duplication and
        reduce the efficiency of development.
      </Paragraph>
      <FormTextArea name="paragraph" />
      <Title level={2}>Guidelines and Resources</Title>
      <ValueSetter />
      <MetaWatcher />
      <Paragraph>
        We supply a series of design principles, practical patterns and high
        quality design resources (<Text code>Sketch</Text> and{" "}
        <Text code>Axure</Text>), to help people create their product prototypes
        beautifully and efficiently.
      </Paragraph>
    </Typography>
  );
};
