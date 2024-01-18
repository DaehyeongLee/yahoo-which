'use client'
import { default as NextImage, ImageProps as NextImageProps } from 'next/image'
import React, { FC, ReactElement, useState } from 'react'

export interface ImageProps extends Omit<NextImageProps, 'src' | 'width' | 'height' | 'onError' | 'alt'> {
  url?: string
  width: number
  height: number
  alt?: string
  fallbackImage?: ReactElement
}

const Image: FC<ImageProps> = ({ url, width, height, alt, fallbackImage, ...props }) => {
  const [isValidImage, setIsValidImage] = useState<boolean>(true)
  const onImageError = () => {
    fallbackImage && setIsValidImage(false)
  }

  return url && isValidImage ? (
    <NextImage src={url} width={width} height={height} onError={onImageError} alt={alt ?? 'image'} {...props} />
  ) : (
    fallbackImage ?? null
  )
}

export default Image
