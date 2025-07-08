import React from 'react'
import Image, {ImageProps} from 'next/image'

interface Props extends Omit<ImageProps, 'src' | 'alt'> {
  src?: string;
  alt?: string;
}

export default function WorldSvg({
  alt = "world svg",
  src = "/world.svg",
  width = 1024,
  height = 1440,
  ...props
}: Props) {
  return (
    <Image
      src={src}
      alt={alt}
      priority={false}
      width={width}
      height={height}
      {...props}
    />
  )
}