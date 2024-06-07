import Link from 'next/link';
import {Link as ChakraLink} from '@chakra-ui/react';

export type ChakraLinkWithNextProps = {
    children: React.ReactNode,
    href: string,
    color: string,
};

export default function ChakraLinkWithNext({children, href,color}: ChakraLinkWithNextProps){
    return(
        <Link href={href} passHref>
            <ChakraLink as="a" color={color}>
                {children}
            </ChakraLink>
        </Link>
    )
}