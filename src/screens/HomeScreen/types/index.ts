export type TMenuItem = {
    id: number;
    name: string;
    disc: number
    weight: string;
    price: number;
    image: string;
}
export type TOrderItem = {
    [key: number]: number;
}
// export type TCategoryType = string | { uri: string };

export type TImageCategory = string;
export type TTextCategory = string;
export type TCategoryType = TTextCategory | TImageCategory;
