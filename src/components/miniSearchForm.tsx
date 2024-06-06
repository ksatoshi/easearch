import { keyWordState, freeDrinkState, freeFoodState, privateRoomState, cardState, nonSmokingState, parkingState, positionEnableState, rangeState } from "@/state/basicResearchState";
import { FormControl, Input, Stack, Button, VStack, FormLabel, Checkbox, Select } from "@chakra-ui/react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";

export type MiniSearchFormProps = {
    router: AppRouterInstance
}

export default function MiniSearchForm(){
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

    const searchButtonOnClick = ()=> {
        router.refresh();
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

    const privateRoomChangeHandler = (e:any) => {
        if(e.target.checked){
            setPrivateRoom(true);
        }else{
            setPrivateRoom(false);
        }
    }

    const cardChangeHandler = (e:any) => {
        if(e.target.checked){
            setCard(true);
        }else{
            setCard(false);
        }
    }

    const nonSmokingChangeHandler = (e:any) => {
        if(e.target.checked){
            setNonSmoking(true);
        }else{
            setNonSmoking(false);
        }
    }

    const parkingChangeHandler = (e:any) => {
        if(e.target.checked){
            setParking(true);
        }else{
            setParking(false);
        }
    }
 
    return(
        <FormControl>
            <Stack direction="row">
                <Input placeholder="キーワードで検索" defaultValue={keyWord} onChange={keyWordChangeHandler}/>
                <Button colorScheme="blue" onClick={searchButtonOnClick}>検索</Button>
            </Stack>
            <Stack>
                <Stack direction="row">
                    <Stack direction="row">
                        <FormLabel htmlFor="free-drink">飲み放題</FormLabel>
                        <Checkbox id="free-drink" defaultChecked={freeDrink} onClick={freeDrinkChangeHandler}/>
                    </Stack>
                    <Stack direction="row">
                        <FormLabel htmlFor="free-food">食べ放題</FormLabel>
                        <Checkbox id="free-food" defaultChecked={freeFood} onClick={freeFoodChangeHandler}/>
                    </Stack>
                    <Stack direction="row">
                        <FormLabel htmlFor="private-room">個室</FormLabel>
                        <Checkbox id="private-room" defaultChecked={privateRoom} onClick={privateRoomChangeHandler}/>
                    </Stack>
                    <Stack direction="row">
                        <FormLabel htmlFor="card">カード払い</FormLabel>
                        <Checkbox id="card" defaultChecked={card} onClick={cardChangeHandler}/>
                    </Stack>
                    <Stack direction="row">
                        <FormLabel htmlFor="non-smoking">禁煙</FormLabel>
                        <Checkbox id="non-smorking" defaultChecked={nonSmoking} onClick={nonSmokingChangeHandler}/>
                    </Stack>
                    <Stack direction="row">
                        <FormLabel htmlFor="parking">駐車場</FormLabel>
                        <Checkbox id="parking" defaultChecked={parking} onClick={parkingChangeHandler}/>
                    </Stack>
                </Stack>

                <Stack direction="row">
                    <Stack direction="row">
                        <FormLabel htmlFor="user-position">位置情報を利用する</FormLabel>
                        <Checkbox id="user-position" defaultChecked={positionEnable}/>
                    </Stack>

                    <Stack direction="row">
                        <FormLabel htmlFor="position-range">検索半径</FormLabel>
                        <Select size="xs" id="position-range" defaultValue={range}>
                            <option value="1">300m</option>
                            <option value="2">500m</option>
                            <option value="3">1km</option>
                            <option value="4">2km</option>
                            <option value="5">3km</option>
                        </Select>
                    </Stack>
                </Stack>
            </Stack>
        </FormControl>
    )
}