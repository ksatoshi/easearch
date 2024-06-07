import { NextRequest } from "next/server";

const endpoint = "http://webservice.recruit.co.jp/hotpepper/gourmet/v1/"
const apiKey = process.env.RECRUIT_API_KEY;

export async function Get(request: NextRequest) {
    const storeId = request.nextUrl.searchParams.get('id');

    let requestUrl = `${endpoint}?key=${apiKey}&id=${storeId}`;

    console.log(requestUrl);

    const originReq = await fetch(requestUrl);
    const originData = await originReq.json();

    return Response.json(originData);
}