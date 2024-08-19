import { FileImageFilled } from "@ant-/icons";
import { PictureFilledIcon } from "@icons/picture-filled";
import { Image as AntImage, Flex, ImageProps } from "antd";
import fallbackImage from "@/assets/placeholder-image.png";
interface Props extends ImageProps {}

export const Image = ({ style, ...props }: Props) => {
  return (
    <AntImage
      width="100%"
      height="auto"
      preview={false}
      placeholder={fallbackImage}
      fallback={fallbackImage}
      style={{ objectFit: "cover", ...style }}
      {...props}
    />
  );
};
