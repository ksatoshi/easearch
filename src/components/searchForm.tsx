import { getPosition } from "@/lib/getPosition";
import { cardState, freeDrinkState, freeFoodState, keyWordState, nonSmokingState, parkingState, privateRoomState, positionEnableState, rangeState } from "@/state/basicResearchState";
import { Button, Checkbox, Flex, FormControl, FormLabel, Input, Select, Stack, VStack } from "@chakra-ui/react";
import { ChangeEvent } from "react";
import { useRecoilState} from "recoil";
import { useRouter } from "next/navigation";

export default function SearchForm(){
    const router = useRouter();

    const [keyWord, setKeyWord] = useRecoilState(keyWordState);
    const [freeDrink, setFreeDrink] = useRecoilState(freeDrinkState);
    const [freeFood, setFreeFood] = useRecoilState(freeFoodState);
    const [privateRoom, setPrivateRoom] = useRecoilState(privateRoomState);
    const [card, setCard] = useRecoilState(cardState);
    const [nonSmoking, setNonSmoking] = useRecoilState(nonSmokingState);
    const [parking, setParking] = useRecoilState(parkingState);
    const [positionEnable, setPositionEnable] = useRecoilState(positionEnableState);
    const [range, setRange] = useRecoilState(rangeState);

    const keyWordChangeHandler = (e:any) => {
        const value = e.target.value;
        setKeyWord(value);
    }

    const freeDrinkChangeHandler = (e:any) => {
        if(e.target.checked){
            setFreeDrink(true);
        }else{
            setFreeDrink(false);
        }
    }

    const freeFoodChangeHandler = (e:any) => {
        if(e.target.checked){
            setFreeFood(true);
        }else{
            setFreeFood(false);
        }
    }

    const privateRoomChangeHandler = (e:any) =>{
        if(e.target.checked){
            setPrivateRoom(true);
        }else{
            setPrivateRoom(false);
        }
    }

    const cardChangeHandler = (e:any) =>{
        if(e.target.checked){
            setCard(true);
        }else{
            setCard(false);
        }
    }

    const nonSmokingChangeHandler = (e:any) =>{
        if(e.target.checked){
            setNonSmoking(true);
        }else{
            setNonSmoking(false);
        }
    }

    const parkingChangeHandler = (e:any) =>{
        if(e.target.checked){
            setParking(true);
        }else{
            setParking(false);
        }
    }

    const rangeChangeHandler = (e:any) =>{
        setRange(e.target.value);
    }

    const userPositionChangeHandler = (e:ChangeEvent<HTMLInputElement>) =>{
        if(e.target.checked){
            getPosition();
            setPositionEnable(true);
        }else{
            setPositionEnable(false);
        }
    }

    const searchButoonOnClick = (e:any) =>{
        // 各条件がtrueではないときfalseを設定する
        if(!freeFood) setFreeFood(false);
        if(!freeDrink) setFreeDrink(false);
        if(!privateRoom) setPrivateRoom(false);
        if(!card) setCard(false);
        if(!nonSmoking) setNonSmoking(false);
        if(!parking) setParking(false);
        if(!positionEnable) setPositionEnable(false);

        router.push("/result");
    }

    return(
        
        <FormControl>
            <Flex justify="center" align="center">
                <Stack direction="row" spacing={5}>
                    <Input placeholder="キーワードで検索" width={800} onChange={keyWordChangeHandler}/>
                    <Button colorScheme="blue" onClick={searchButoonOnClick}>検索</Button>
                </Stack>
            </Flex>
            
            <Flex justify="center" align="center">
                <VStack spacing={2}>
                    <Stack direction="row" spacing={5}>
                        <Stack direction="row">
                            <FormLabel htmlFor="free-drink">飲み放題</FormLabel>
                            <Checkbox id="free-drink" onChange={freeDrinkChangeHandler}/>
                        </Stack>

                        <Stack direction="row">
                            <FormLabel htmlFor="free-food">食べ放題</FormLabel>
                            <Checkbox id="free-food" onChange={freeFoodChangeHandler}/>
                        </Stack>

                        <Stack direction="row">
                            <FormLabel htmlFor="private-room">個室</FormLabel>
                            <Checkbox id="private-room" onChange={privateRoomChangeHandler}/>
                        </Stack>

                        <Stack direction="row">
                            <FormLabel htmlFor="card">カード払い</FormLabel>
                            <Checkbox id="card" onChange={cardChangeHandler}/>
                        </Stack>

                        <Stack direction="row">
                            <FormLabel htmlFor="non-smoking">禁煙</FormLabel>
                            <Checkbox id="non-smoking" onChange={nonSmokingChangeHandler}/>
                        </Stack>

                        <Stack direction="row">
                            <FormLabel htmlFor="parking">駐車場あり</FormLabel>
                            <Checkbox id="parking" onChange={parkingChangeHandler}/>
                        </Stack>
                    </Stack>

                    <Stack direction="row" spacing={20}>
                        <Stack direction="row">
                            <FormLabel htmlFor="user-position">位置情報を利用する</FormLabel>
                            <Checkbox id="user-position" onChange={userPositionChangeHandler}/>
                        </Stack>

                        <Stack direction="row">
                            <FormLabel htmlFor="position-range">検索半径</FormLabel>
                            <Select size="sm" id="position-range" onChange={rangeChangeHandler}>
                                <option value="1">300m</option>
                                <option value="2">500m</option>
                                <option value="3">1km</option>
                                <option value="4">2km</option>
                                <option value="5">3km</option>
                            </Select>
                        </Stack>
                    </Stack>

                </VStack>
            </Flex>
        </FormControl>
        

    )
}