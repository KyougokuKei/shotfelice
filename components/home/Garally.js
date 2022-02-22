import { Box, Text } from '../../styles/components';
import { SlickSlider } from '../SlickSlider/Slider';

export function Garally({ garally, imgPaths }) {
    return (
        <Box background="white" >
            <Box
                pt={60}
                pb={[24, 48]}
                pl={[0, 80]}
                display={["flex", "block", "block"]}
                justifyContent={["center", "none"]}
                alignItems={["center", "none"]}
                flexDirection="column"
            >
                <Text
                    pl={[0, 6]}
                    pb={10}
                    fontSize={16}
                    color="grey5"
                >
                    {garally.title_en}
                </Text>
                <Text
                    fontWeight="bold"
                    fontSize={[30, 40, 40]}
                    color="black"
                >
                    {garally.title_jp}
                </Text>
            </Box>
            <SlickSlider imgPaths={imgPaths}></SlickSlider>
        </Box>
    )
}