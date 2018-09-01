export class PollInfo{
    public _id: string;
    public shop: ShopInfo;
}

export class ShopInfo{
    public _id: string;
    public name: string;
    public detail: string;
    public menus: ShopMenu[];
}

export class ShopMenu{
    public _id: string;
    public name: string;
}

export class Configuration{
    public static currentUsername: string;
}