export class PollInfo {
    public _id: string;
    public shop: ShopInfo;
    public defaultMenu: ShopMenu;
    public myDefaultMenu: ShopMenu;
    public myOrder: ShopMenu;
}

export class ShopInfo {
    public _id: string;
    public name: string;
    public detail: string;
    public menus: ShopMenu[];
    public defaultMenu: ShopMenu;
}

export class ShopMenu {
    public _id: string;
    public name: string;
    public selecteddefault: boolean;
    public youselect: boolean;
}

export class Configuration {
    public static currentUsername: string;
}

export class UserInfo {
    public _id: string;
    public name: string;
}