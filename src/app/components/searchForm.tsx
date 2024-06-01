import { Button, Checkbox, Flex, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";

export default function SearchForm(){
    return(
        
        <FormControl>
            <Flex justify="center" align="center">
                <Stack direction="row" spacing={5}>
                    <Input placeholder="キーワードで検索" width={800}/>
                    <Button colorScheme="blue">検索</Button>
                </Stack>
            </Flex>
            
            <Flex justify="center" align="center">
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
            </Flex>
        </FormControl>
        

    )
}