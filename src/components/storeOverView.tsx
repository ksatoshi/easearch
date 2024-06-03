import { Box, HStack, VStack, Text,Link, Stack} from "@chakra-ui/react"
import Image from "next/image"
import ChakraLinkWithNext from "./chakraLinkWithNext";
import { tree } from "next/dist/build/templates/app-page";

export type StoreOverViewProps = {
    storeName: string,
    address: string,
    thumbnailUrl: string|null,
    overViewUrl: string,
}

export default function StoreOverView({storeName,address,thumbnailUrl,overViewUrl}:StoreOverViewProps){
    // thumbnailUrlがnull|undefinedな時placeholderに置き換える
    if(thumbnailUrl == null || thumbnailUrl == undefined || thumbnailUrl == "") thumbnailUrl = "/placeholder.svg";

    return(
        <Box w="100%" h={100}>        
            <Stack spacing={2} direction="row">
                <Image src={thumbnailUrl} width={80} height={80} alt="store thumbnail"/>
                <Stack>
                    <Link textAlign="left">{storeName}</Link>
                    <Text textAlign="left">{address}</Text>      
                    <Link textAlign="right" color="blue.500">詳細</Link>
                </Stack>
            </Stack>
        </Box>
    )
}