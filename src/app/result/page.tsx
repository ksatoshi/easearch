"use client"

import MiniSearchForm from "@/components/miniSearchForm";
import StoreOverView from "@/components/storeOverView";
import { getFromLocalStorage } from "@/lib/localStoratgeControler";
import { getBasicSearch } from "@/lib/recruitApiClient/gourmentv1";
import { Gourmentv1LiteType } from "@/lib/recruitApiClient/gourmentv1Type";
import { cardState, freeDrinkState, freeFoodState, keyWordState, nonSmokingState, parkingState, positionEnableState, privateRoomState, rangeState } from "@/state/basicResearchState";
import { Grid, GridItem, HStack, StackDivider, VStack} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

export default function Result(){
    const router = useRouter();

    const keyWord = useRecoilValue(keyWordState);
    const freeDrink = useRecoilValue(freeDrinkState);
    const freeFood = useRecoilValue(freeFoodState);
    const privateRoom = useRecoilValue(privateRoomState);
    const card = useRecoilValue(cardState);
    const nonSmoking = useRecoilValue(nonSmokingState);
    const parking = useRecoilValue(parkingState);
    const isPositionEnable = useRecoilValue(positionEnableState);
    let lat = 0;
    let lng = 0;
    let range = 0;

    if(isPositionEnable){
        lat = Number(getFromLocalStorage('lat'));
        lng = Number(getFromLocalStorage('lon'));
        range = useRecoilValue(rangeState);
    }

    // keyWordが空の場合APIを叩く前に戻す
    if(keyWord == null || keyWord == undefined || keyWord == ""){
        router.back();
    }

    const [result, setResult] = useState<Gourmentv1LiteType>();

    useEffect(() => {
        const fetchData = async () => {
            
                // TODO: 位置情報を無効化しているときの処理
                if(isPositionEnable){
                    const res:Gourmentv1LiteType = await getBasicSearch({keyWord,freeDrink,freeFood,privateRoom,card,nonSmoking,parking,lat,lng,range});
                
                    setResult(res);
                }
        };

        fetchData();
    }, [keyWord, freeDrink, freeFood, privateRoom, card, nonSmoking, parking,lat,lng,range,isPositionEnable]);

    if(!result){
        return <div>Loading...</div>;
    }

    const resultBody = result["results"]["shop"];

    return(
        <main>
            <Grid w="100%" h="100%" gap={2}>
                <GridItem w="40%" h="100%">
                    <MiniSearchForm />
                    {resultBody.map((value, key) => (
                        <StoreOverView storeName={value.name} address={value.address} access={value.access} thumbnailUrl={value.logo_image} overViewUrl="" storeId={value.id}/>
                    ))}
                </GridItem>
            </Grid>
        </main>
    )
}