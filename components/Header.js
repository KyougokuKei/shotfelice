import React from 'react'
import Link from 'next/link'
import { Box, Clickable, Text } from '../styles/components'

export function Header() {
  return (
    <Box
      as="header"
      width="100%" height="80px"
      borderBottom="1px solid rgb(75, 85, 99)"
      position="fixed"
      top={0}
      left={0}
      display="flex"
      alignItems="center"
      justifyContent="flex-end"
      px={"20%"}
      background="#1f2937"
      zIndex={3}
    >
      <Link href="/">
        <Clickable p={20} borderRadius={20} mr="auto" color="white" fontSize={24}>
          TestSite
        </Clickable>
      </Link>


      <Link href="/posts/page1">
        <Clickable p={20} borderRadius={20} color="white" fontSize={18}>
          Page1
        </Clickable>
      </Link>
      <Link href="/posts/page2">
        <Clickable p={20} borderRadius={20} color="white" fontSize={18}>
          Page2
        </Clickable>
      </Link>
      <Link href="/posts/page3">
        <Clickable p={20} borderRadius={20} color="white" fontSize={18}>
          Page3
        </Clickable>
      </Link>


    </Box>
  )
}
