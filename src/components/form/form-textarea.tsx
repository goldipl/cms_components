import { TextArea } from "@/components/ui/input";
import {
  Controller,
  FieldValues,
  useFormContext,
  useFormState,
} from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useFieldMeta } from "@/hooks/useFieldMeta";
import { GetProps } from "antd";

export const FormTextArea = ({
  ...props
}: GetProps<typeof TextArea> & { name: string }) => {
  const { control, isTouched, error } = useFieldMeta(props.name);

  const status = error ? "error" : undefined;
  return (
    <>
      <Controller
        name={props.name}
        control={control}
        render={({ field }) => {
          return (
            <TextArea
              {...field}
              {...props}
              status={status}
              error={error?.message}
            />
          );
        }}
      />
    </>
  );
};
