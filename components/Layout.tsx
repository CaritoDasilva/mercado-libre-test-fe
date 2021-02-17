import React, { ReactNode } from 'react'
import Head from 'next/head'
import BoxSearch from './BoxSearch'
import BreadcrumpComponent from './Breadcrumb'

export type Props = {
  children?: ReactNode
  title?: string;
  categories?: string[];
  titleTag?: string;
  pictureTag?: string;
  descriptionTag?: string;
}

const Layout = ({ children, title, categories, titleTag, pictureTag, descriptionTag }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={titleTag} key="title" />
      <meta property="og:description" content={descriptionTag} key="description" />
      <meta property="og:image" content={pictureTag} key="image" />
    </Head>
    <header>
      <nav>
        <BoxSearch />
      </nav>
    </header>
    <BreadcrumpComponent categories={categories} />
    {children}

  </div>
)

export default Layout
