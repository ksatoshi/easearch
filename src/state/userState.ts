import { atom } from "recoil"

export const userLatState = atom<number>({
    key: 'userLat',
    default: undefined
});

export const userLonState = atom<number>({
    key: 'userLon',
    default: undefined
});