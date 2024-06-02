const endpoint = "http://webservice.recruit.co.jp/hotpepper/gourmet/v1/"
const apiKey = process.env.RECRUIT_API_KEY

export type basicResearchType = {
    keyWord: string,
    freeDrink: boolean,
    freeFood: boolean,
    privateRoom: boolean,
    card: boolean,
    nonSmoking: boolean,
    parking: boolean,
    lat: number|undefined,
    lon: number|undefined,
    range: number|undefined,
}

export async function getBasicSearch(
    {
        keyWord,
        freeDrink,
        freeFood,
        privateRoom,
        card,
        nonSmoking,
        parking,
        lat,
        lon,
        range
    }:basicResearchType
){
    // リクエストURLの合成
    let url = endpoint;

    url = url + "?key=" + apiKey + "&keyword=" + keyWord;

    if (freeDrink){
        url = url + "&free_drink=1";
    }else{
        url = url + "&free_drink=0";
    }

    if(freeFood){
        url = url + "&free_food=1";
    }else{
        url = url + "&free_food=0";
    }

    if(privateRoom){
        url = url + "&private_room=1";
    }else{
        url = url + "&private_room=0";
    }

    if(card){
        url = url + "&card=1";
    }else{
        url = url + "&card=0";
    }

    if(nonSmoking){
        url = url + "&non_smoking=1";
    }else{
        url = url + "&non_smoking=0";
    }

    if(parking){
        url = url + "&parking=1";
    }else{
        url = url + "&parking=0";
    }

    if(lat != undefined && lat != null){
        url = url + "&lat=" + lat;
        url = url + "&lng=" + lon;

        if(range != undefined && range != null){
            url = url + "&range=" + range; 
        }
    }

    console.log("request url:"+url);

    const res = await fetch(url);
    const data = await res.json();

    return data;
}