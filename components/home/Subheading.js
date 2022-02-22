import { Button } from '../Button';
import { Box, Text } from "../../styles/components";
import React from 'react';

export function Subheading({ subheading, nav }) {
    return (
        <Box
            display="flex" alignItems="flex-start" justifyContent="center" flexDirection="column"
            style={{ boxSizing: "border-box" }}
            px={["5%", "10%", "10%"]}
            width="100%"
            height={["calc(100% - 94px)", "calc(100% - 144px)"]}
        >
            <Text
                mb={30}
                color="black"
                fontSize={[24, 28]}
            >
                {subheading.subtitle}
            </Text>
            <Text
                mb={30}
                color="black"
                fontSize={[54, 64, 64]}
                lineHeight="1.05"
                fontWeight="bold"
            >
                {
                    subheading.title.split('<br>').map((str, index) => {
                        return (
                            <React.Fragment key={index}>{str}<br /></React.Fragment>
                        )
                    })
                }
            </Text>
            <Text
                mb={30}
                maxWidth={500}
                color="grey5"
                fontSize={14}
                lineHeight="2.07"
                fontWeight="bold"
                style={{ textShadow: "0 0 2px  rgba(255, 255, 255, 1" }}
            >
                {subheading.body}
            </Text>
            <Button height={50} href={nav.href[1]}>
                撮影を予約する
            </Button>
        </Box>
    )
}