import Head from 'next/head'

import { PageTransition } from '../components/PageTransition'
import fs from 'fs'
import path from 'path'
import Image from 'next/image'
import { Box, MotionDiv, Clickable } from '../styles/components'

export const getStaticProps = async (ctx) => {
  const posts = fs.readdirSync(path.join(process.cwd(), 'pages/posts'))
  const postsNames = posts.map(post => post.replace('.js', ''))
  return {
    props: {
      posts: postsNames
    }
  }
}

export default function Home({ posts }) {
  return (
    <PageTransition width="100%" height="100%" background="#1f2937" flexDirection="column" display="flex" alignItems="center" justifyContent="center">
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image src="/image/logo.svg" width="200px" height="200px"></Image>
      <Box fontWeight="100" color="white" mt={40} fontSize={24}>Next.js TestPage</Box>
    </PageTransition>
  )
}
