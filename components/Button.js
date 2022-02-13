
import { Clickable, Text } from "../styles/components";
import Link from 'next/link';
export function Button(props) {

    return (
        <Link href={props.href} passHref>
            <Clickable
                height={50}
                styles={{ boxSizeing: "border-box", cursor: "pointer" }}
                className="border-box pointer"
                display="flex"
                alignItems="center"
                justifyContent="center"
                backgroundColor="#4d4646"
                width={props.width}
                {...props}
            >
                <Text
                    px={props.px === undefined ? 40 : props.px}
                    fontSize={props.fontSize === undefined ? 18 : props.fontSize}
                    color="white"
                    display="flex" alignItems="center" justifyContent="center"
                    height={50}
                >
                    {props.children}
                </Text>
            </Clickable>
        </Link>
    );
}