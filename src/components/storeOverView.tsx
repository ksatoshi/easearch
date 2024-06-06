import { Box,Text,Link, Stack} from "@chakra-ui/react"
import Image from "next/image"

export type StoreOverViewProps = {
    storeName: string,
    address: string,
    access: string,
    thumbnailUrl: string|null,
    overViewUrl: string,
}

export default function StoreOverView({storeName,address,access,thumbnailUrl,overViewUrl}:StoreOverViewProps){
    // thumbnailUrlがnull|undefinedな時placeholderに置き換える
    if(thumbnailUrl == null || thumbnailUrl == undefined || thumbnailUrl == "") thumbnailUrl = "/placeholder.svg";

    return(
        <Box w="100%" h={150}>        
            <Stack spacing={2} direction="row">
                <Image src={thumbnailUrl} width={100} height={100} alt={storeName+"のサムネイル"}/>
                <Stack>
                    <Link textAlign="left">{storeName}</Link>
                    <Text textAlign="left">{address}</Text>
                    <Text textAlign="left">{access}</Text>      
                    <Link textAlign="right" color="blue.500">詳細</Link>
                </Stack>
            </Stack>
        </Box>
    )
}