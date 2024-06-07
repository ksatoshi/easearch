export type Gourmentv1LiteType = {
    results: {
        app_version: number,
        results_available: number,
        results_returned: number,
        results_start: number,
        shop: Gourmentv1LiteShopOnlyType
    },
};

export type GourmentV1DetailType = {
    results: {
        app_version: number,
        results_available: number,
        results_returned: number,
        results_start: number,
        shop: Gourmentv1DetailShopOnlyType
    },
};

export type Gourmentv1LiteShopOnlyType = {
    id: string,
    name: string,
    logo_image: string|null,
    name_kana: string|null,
    address: string,
    access: string,
}[];

export type Gourmentv1DetailShopOnlyType = {
    id: string,
    name: string,
    logo_image: string|null,
    address: string,
    open: string|null,
    close: string|null,
    photo: {
        pc: {
            l: string,
            m: string,
            s: string
        },
        mobile: {
            l: string,
            s: string,
        }|null
    }
}[]