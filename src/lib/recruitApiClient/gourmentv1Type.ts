export type Gourmentv1LiteType = {
    results: {
        app_version: number,
        results_available: number,
        results_returned: number,
        results_start: number,
        shop: Gourmentv1LiteShopOnlyType
    },
};

export type Gourmentv1LiteShopOnlyType = {
    id: string,
    name: string,
    logo_image: string|null,
    name_kana: string|null,
    address: string,
    access: string,
}[]