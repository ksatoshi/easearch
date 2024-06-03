const endpoint = "http://localhost:3000/api/proxy/gourment/v1/"

export type basicResearchType = {
    keyWord: string,
    freeDrink: boolean,
    freeFood: boolean,
    privateRoom: boolean,
    card: boolean,
    nonSmoking: boolean,
    parking: boolean,
    lat: number|undefined,
    lng: number|undefined,
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
        lng,
        range
    }:basicResearchType
){
    // リクエストURLの合成
    let url = `${endpoint}?keyword=${keyWord}&free_drink=${Number(freeDrink)}&free_food=${Number(freeFood)}&private_room=${Number(privateRoom)}&card=${Number(card)}&non_smoking=${Number(nonSmoking)}&parking=${Number(parking)}`;

    // 位置情報が定義されているときつなぎこむ
    if((lat!=undefined && lng!=undefined && range!=undefined) || (lat!=null && lng!=null && range!=null)){
        url = `${url}&lat=${lat}&lng=${lng}&range=${range}`;
    }

    const res = await fetch(url,{method: 'GET'});
    const data = await res.json();

    return data;
}