import { userLatState, userLonState } from "@/state/userState";
import { useRecoilState } from "recoil";
import { saveToLocalStorage } from "./localStoratgeControler";

export function getPosition(){
    if(navigator === null) return null;

    navigator.geolocation.getCurrentPosition(
        (position) =>{
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            // ここら辺よくわからないのでとりあえずいったんlocalstorageに保存する
            saveToLocalStorage('lat',lat.toString());
            saveToLocalStorage('lon',lon.toString());
        }
    );
}