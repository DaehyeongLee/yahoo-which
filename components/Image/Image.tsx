'use client'
import { default as NextImage, ImageProps as NextImageProps } from 'next/image'
import React, { FC, useState } from 'react'

export interface ImageProps extends Omit<NextImageProps, 'src' | 'width' | 'height' | 'onError' | 'alt'> {
  url?: string
  width: number
  height: number
  alt?: string
}

const Image: FC<ImageProps> = ({ url, width, height, alt, ...props }) => {
  const [isValidImage, setIsValidImage] = useState<boolean>(true)
  // TODO: fallback 이미지 추가될 경우 적용
  const fallbackImage = null
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
