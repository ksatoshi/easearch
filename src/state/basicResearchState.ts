import {atom} from "recoil";

export const searchWordState = atom<string>({
    key: 'searchWord',
    default: undefined
});

export const keyWordState = atom<string>({
    key: 'keyWord',
    default: undefined
});


export const positionState = atom<[number, number]>({
    key: 'position',
    default: undefined
});

export const searchRangeState = atom<number>({
    key: 'searchRange',
    default: undefined
});