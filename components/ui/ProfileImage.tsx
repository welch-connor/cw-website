import Image, { ImageProps } from 'next/image';
import { useTheme } from 'next-themes';

interface ProfileImageProps extends Omit<ImageProps, 'src' | 'alt' | 'width' | 'height'> {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  containerClassName?: string;
  imageClassName?: string;
  overlayClassName?: string;
  borderColor?: string;
  borderWidth?: number;
  shadow?: string;
}

export function ProfileImage({
  src,
  alt = 'Profile Image',
  width = 300,
  height = 300,
  containerClassName = '',
  imageClassName = '',
  overlayClassName = '',
  borderColor = 'var(--bs-primary)',
  borderWidth = 4,
  shadow = '0 20px 40px -5px rgba(0, 0, 0, 0.7), 0 15px 20px -5px rgba(0, 0, 0, 0.5)',
  // hoverEffect removed
  ...props
}: ProfileImageProps) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <div
      className={`relative ${containerClassName}`}
      style={{
        width: '100%',
        maxWidth: width,
        aspectRatio: '1',
        borderRadius: '50%',
        border: `${borderWidth}px solid ${borderColor}`,
        boxShadow: shadow,
        backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
        overflow: 'hidden',
        padding: '0',
        margin: '0 auto'
      }}
    >
      <div 
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          overflow: 'hidden',
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`w-full h-full object-cover object-center ${imageClassName}`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
          priority
          {...props}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-b from-transparent to-black/20 ${overlayClassName}`}
          style={{
            opacity: 0.1
          }}
        />
      </div>
    </div>
  );
}
