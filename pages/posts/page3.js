import Link from 'next/link'
import Head from 'next/head'
import { Box, Clickable } from '../../styles/components';
import { PageTransition } from '../../components/PageTransition';
export default function Page3() {
    return (
        <PageTransition width="100%" height="100%" background="#1f2937" px="20%" pt={80}>
            <Head>
                <title>Page3</title>
            </Head>
            <Box
                as="h1"
                color="white"
                fontSize={40}
                mb={40}
            >
                This is Page3.
            </Box>
            <Box
                as="p"
                color="white"
                lineHeight="1.5"
                mb={20}
            >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt obcaecati rerum nihil facilis illum aliquam provident tempora, fugiat delectus tenetur nesciunt exercitationem odit, doloribus similique accusantium ab ipsam fuga quibusdam corrupti sequi sapiente iure reiciendis. Quaerat, inventore mollitia? Similique minima dolores reprehenderit autem repudiandae veniam nesciunt soluta omnis corporis eveniet? Ipsa incidunt sunt deserunt ea amet assumenda molestias, voluptatibus, ipsam sapiente adipisci rem magni obcaecati repudiandae quae eveniet praesentium unde qui voluptas dignissimos provident? Magnam impedit dolorum nobis sapiente aspernatur, iure, eligendi totam obcaecati voluptatum quis aliquid, corporis assumenda ratione architecto fuga! Incidunt similique eos quos neque fugiat vero laudantium.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque accusantium ratione, perferendis sit ex quidem aliquam accusamus nostrum earum temporibus tempora, dignissimos, architecto incidunt distinctio quaerat beatae molestiae reiciendis ut!
            </Box>
            <Link href="/">
                <Clickable mt={20} fontSize={16} color="white" borderBottom="solid 1px #eee">
                    ⬅︎ Back Home
                </Clickable>
            </Link>

        </PageTransition>
    )
}
