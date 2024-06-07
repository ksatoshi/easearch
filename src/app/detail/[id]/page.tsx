"use client"

import { getSearchWithId } from "@/lib/recruitApiClient/gourmentv1";
import { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";
import { GourmentV1DetailType } from "@/lib/recruitApiClient/gourmentv1Type";
import Image from "next/image";

export default function Detail({params}:{params:{id:string}}){
    const storeId = params.id;  

    const [result,setResult] = useState<GourmentV1DetailType>();

    useEffect(() => {
        const fetchData = async () => {
            const res: GourmentV1DetailType = await getSearchWithId(storeId);

            setResult(res);
        }

        fetchData();
    }, [storeId]);

    if(!result){
        return <div>Loading...</div>
    }

    const resultBody = result.results.shop; // とりあえず先頭のみ参照する

    return(
        <main>
            {resultBody.map((value, key) => (
                <>
                <Image src={value.photo.pc.l} alt={value.name+"の店舗画像(L)"} width={300} height={150}/>
                <Text>{value.name}</Text>
                <Text>{value.address}</Text>
                <Text>{value.open}</Text>
                <Text>{"定休日"+value.close}</Text>
                </>
                
            ))}
        </main>
    )
}