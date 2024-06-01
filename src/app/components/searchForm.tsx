import { getPosition } from "@/lib/getPosition";
import { Button, Checkbox, Flex, FormControl, FormLabel, Input, Select, Stack, VStack } from "@chakra-ui/react";

export default function SearchForm(){
    const userPositionChangeHandler = (e:boolean) =>{
        if(e){
            getPosition();
        }
    }

    return(
        
        <FormControl>
            <Flex justify="center" align="center">
                <Stack direction="row" spacing={5}>
                    <Input placeholder="キーワードで検索" width={800}/>
                    <Button colorScheme="blue">検索</Button>
                </Stack>
            </Flex>
            
            <Flex justify="center" align="center">
                <VStack spacing={2}>
                    <Stack direction="row" spacing={5}>
                        <Stack direction="row">
                            <FormLabel htmlFor="free-drink">飲み放題</FormLabel>
                            <Checkbox id="free-drink"/>
                        </Stack>

                        <Stack direction="row">
                            <FormLabel htmlFor="free-food">食べ放題</FormLabel>
                            <Checkbox id="free-food"/>
                        </Stack>

                        <Stack direction="row">
                            <FormLabel htmlFor="private-room">個室</FormLabel>
                            <Checkbox id="private-room"/>
                        </Stack>

                        <Stack direction="row">
                            <FormLabel htmlFor="card">カード払い</FormLabel>
                            <Checkbox id="card"/>
                        </Stack>

                        <Stack direction="row">
                            <FormLabel htmlFor="non-smoking">禁煙</FormLabel>
                            <Checkbox id="non-smoking"/>
                        </Stack>

                        <Stack direction="row">
                            <FormLabel htmlFor="parking">駐車場あり</FormLabel>
                            <Checkbox id="parking"/>
                        </Stack>
                    </Stack>

                    <Stack direction="row" spacing={20}>
                        <Stack direction="row">
                            <FormLabel htmlFor="user-position">位置情報を利用する</FormLabel>
                            <Checkbox id="user-position" onChange={userPositionChangeHandler}/>
                        </Stack>

                        <Stack direction="row">
                            <FormLabel htmlFor="position-range">検索半径</FormLabel>
                            <Select size="sm" id="position-range">
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