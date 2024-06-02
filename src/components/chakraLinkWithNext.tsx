import Link from 'next/link';
import {Link as ChakraLink} from '@chakra-ui/react';

export type ChakraLinkWithNextProps = {
    children: React.ReactNode,
    href: string
};

export default function ChakraLinkWithNext({children, href}: ChakraLinkWithNextProps){
    return(
        <Link href={href} passHref>
            <ChakraLink as="a">
                {children}
            </ChakraLink>
        </Link>
    )
}