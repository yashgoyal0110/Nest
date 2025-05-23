import { Metadata } from 'next'
import React from 'react'
import { getStaticMetadata } from 'utils/metaconfig'

export const metadata: Metadata = getStaticMetadata('about', '/about')

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
