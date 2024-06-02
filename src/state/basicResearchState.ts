import {atom} from "recoil";

export const searchWordState = atom<string>({
    key: 'searchWord',
    default: undefined
});

export const keyWordState = atom<string>({
    key: 'keyWord',
    default: undefined
});

export const positionEnableState = atom<boolean>({
    key: 'positionIsEnable',
    default: undefined
});

export const rangeState = atom<number>({
    key: 'range',
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

export const smallAreaState = atom<number>({
    key: 'smallArea',
    default: undefined
});

export const middleAreaState = atom<number>({
    key: 'middleArea',
    default: undefined
});

export const largeAreaState = atom<number>({
    key: 'largeArea',
    default: undefined
});

export const datumState = atom<"world"|"tokyo">({
    key: 'datum',
    default: "world"
});

export const freeDrinkState = atom<boolean>({
    key: 'freeDrink',
    default: undefined
});

export const freeFoodState = atom<boolean>({
    key: 'freeFood',
    default: undefined
});

export const privateRoomState = atom<boolean>({
    key: 'privateRoom',
    default: undefined
});

export const cardState = atom<boolean>({
    key: 'card',
    default: undefined
});

export const nonSmokingState = atom<boolean>({
    key: 'nonSmoking',
    default: undefined
});

export const parkingState = atom<boolean>({
    key: 'parkingState',
    default: undefined
});