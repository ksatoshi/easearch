export function saveToLocalStorage(key: string, value: string){
    if (window == undefined) return;

    window.localStorage.setItem(key, value);

    return ;
}

export function getFromLocalStorage(key: string): string|null{
    if (window == undefined) return null;

    const value = window.localStorage.getItem(key);

    return value;
}