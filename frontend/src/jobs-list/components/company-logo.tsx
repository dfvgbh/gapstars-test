import { SyntheticEvent } from "react";
import fallbackLogo from "../../assets/fallback-company-logo.png";

export const CompanyLogo = ({
  src,
  alt,
  className,
  ...props
}: {
  src: string;
  alt: string;
  className?: string;
}) => {
  const handleImageError = (event: SyntheticEvent<HTMLImageElement>) => {
    const target = event.target as HTMLImageElement;
    target.src = fallbackLogo;
  };

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={handleImageError}
      {...props}
    />
  );
};
