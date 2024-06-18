import Image, { type StaticImageData } from "next/image";

interface ReusableImageProps extends React.ComponentProps<typeof Image> {
  src: string | StaticImageData;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
}
const ReusableImage: React.FC<ReusableImageProps> = ({
  src,
  alt,
  width,
  height,
  sizes,
  ...props
}) => {
  return (
    <Image
      {...props}
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
    />
  );
};

export default ReusableImage;
