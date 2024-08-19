import { useFormContext, useFormState } from "react-hook-form";

export const useFieldMeta = (name: string) => {
  const { control, getFieldState } = useFormContext();
  const formState = useFormState({ control, name });
  const fieldState = getFieldState(name, formState);
  return { control, ...fieldState, isError: !!fieldState.error };
};

export const useFieldsMeta = <T extends string>(names: T[]) => {
  const { control, getFieldState } = useFormContext();
  const formState = useFormState({ control, name: names });

  return names.reduce(
    (acc, name) => {
      const fieldState = getFieldState(name, formState);
      acc[name] = { control, ...fieldState, isError: !!fieldState.error };
      return acc;
    },
    {} as Record<T, ReturnType<typeof useFieldMeta>>
  );
};
