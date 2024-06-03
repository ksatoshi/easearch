import { NextRequest } from "next/server";

const endpoint = "http://webservice.recruit.co.jp/hotpepper/gourmet/v1/"
const apiKey = ""

export async function GET(request: NextRequest) {
    const freeDrink = request.nextUrl.searchParams.get('free_drink');
    const freeFood = request.nextUrl.searchParams.get('free_food');
    const privateRoom = request.nextUrl.searchParams.get('private_room');
    const card = request.nextUrl.searchParams.get('card');
    const nonSmoking = request.nextUrl.searchParams.get('non_smoking');
    const parking = request.nextUrl.searchParams.get('parking');
    
    const requestUrl = `${endpoint}?key=${apiKey}&free_drink=${freeDrink}&free_food=${freeFood}&private_room=${privateRoom}&card=${card}&non_smoking=${nonSmoking}&parking=${parking}&format=json`;

    console.log(`request url:${requestUrl}`);

    const originReq = await fetch(requestUrl);
    const originData = await originReq.json();

    return Response.json(originData);
}