    export interface Data {
        key: string;
        value: string;
    }

    export interface Status {
        value: string;
        data: Data;
    }

    export interface Data3 {
        key: string;
        value: string;
    }

    export interface Status2 {
        value: string;
        data: Data3;
    }

export interface 12027411620461287312 {
    id: string;
    order?: any;
    created_at: string;
    updated_at: string;
    parent?: any;
    slug: string;
    status: Status2;
    title: string;
    description: string;
}

    export interface Data2 {
        1202741162046128731: 12027411620461287312;
    }

    export interface Category {
        value: string;
        data: Data2;
    }

    export interface Data4 {
        key: string;
        value: string;
    }

    export interface StockStatus {
        value: string;
        data: Data4;
    }

    export interface Data5 {
        key: string;
        value: string;
    }

    export interface RequiresShipping {
        value: string;
        data: Data5;
    }

    export interface Data6 {
        key: string;
        value: string;
    }

    export interface CatalogOnly {
        value: string;
        data: Data6;
    }

    export interface Data7 {
        id: string;
        title: string;
        description?: any;
        rate: number;
        created_at?: any;
        updated_at?: any;
    }

    export interface TaxBand {
        value: string;
        data: Data7;
    }

    export interface Data9 {
        key: string;
        value: string;
    }

    export interface Status3 {
        value: string;
        data: Data9;
    }

    export interface Data8 {
        id: string;
        order?: any;
        created_at: string;
        updated_at: string;
        slug: string;
        status: Status3;
        title: string;
        description: string;
    }

    export interface Collection {
        value: string;
        data: Data8;
    }

    export interface Url {
        http: string;
        https: string;
    }

    export interface Segments {
        domain: string;
        suffix: string;
    }

    export interface Details {
        type: string;
        size: number;
        width: number;
        height: number;
    }

    export interface Image {
        id: number;
        name: string;
        url: Url;
        segments: Segments;
        details: Details;
    }

    export interface Formatted {
        with_tax: string;
        without_tax: string;
        tax: string;
    }

    export interface Rounded {
        with_tax: number;
        without_tax: number;
        tax: number;
    }

    export interface Raw {
        with_tax: number;
        without_tax: number;
        tax: number;
    }

    export interface Pricing {
        formatted: Formatted;
        rounded: Rounded;
        raw: Raw;
    }

    export interface Formatted2 {
        with_tax: string;
        without_tax: string;
        tax: string;
    }

    export interface Rounded2 {
        with_tax: number;
        without_tax: number;
        tax: number;
    }

    export interface Raw2 {
        with_tax: number;
        without_tax: number;
        tax: number;
    }

    export interface PreDiscount {
        formatted: Formatted2;
        rounded: Rounded2;
        raw: Raw2;
    }

    export interface Formatted3 {
        with_tax: string;
        without_tax: string;
        tax: string;
    }

    export interface Rounded3 {
        with_tax: number;
        without_tax: number;
        tax: number;
    }

    export interface Raw3 {
        with_tax: number;
        without_tax: number;
        tax: number;
    }

    export interface PostDiscount {
        formatted: Formatted3;
        rounded: Rounded3;
        raw: Raw3;
    }

    export interface Totals {
        pre_discount: PreDiscount;
        post_discount: PostDiscount;
    }

    export interface Bc558108255e2eefb99eaebec2836624 {
        id: string;
        quantity: number;
        limit: number;
        order?: any;
        created_at: string;
        updated_at: string;
        sku: string;
        title: string;
        slug: string;
        sale_price: number;
        status: Status;
        category: Category;
        stock_level: number;
        stock_status: StockStatus;
        description: string;
        requires_shipping: RequiresShipping;
        weight: number;
        height: number;
        width: number;
        depth: number;
        catalog_only: CatalogOnly;
        tax_band: TaxBand;
        collection: Collection;
        brand?: any;
        price: number;
        is_variation: boolean;
        modifiers: any[];
        images: Image[];
        pricing: Pricing;
        name: string;
        totals: Totals;
    }

    export interface Contents {
        bc558108255e2eefb99eaebec2836624: Bc558108255e2eefb99eaebec2836624;
    }

    export interface Formatted4 {
        with_tax: string;
        without_tax: string;
        tax: string;
    }

    export interface Rounded4 {
        with_tax: number;
        without_tax: number;
        tax: number;
    }

    export interface Raw4 {
        with_tax: number;
        without_tax: number;
        tax: number;
    }

    export interface PreDiscount2 {
        formatted: Formatted4;
        rounded: Rounded4;
        raw: Raw4;
    }

    export interface Formatted5 {
        with_tax: string;
        without_tax: string;
        tax: string;
    }

    export interface Rounded5 {
        with_tax: number;
        without_tax: number;
        tax: number;
    }

    export interface Raw5 {
        with_tax: number;
        without_tax: number;
        tax: number;
    }

    export interface PostDiscount2 {
        formatted: Formatted5;
        rounded: Rounded5;
        raw: Raw5;
    }

    export interface Totals2 {
        pre_discount: PreDiscount2;
        post_discount: PostDiscount2;
    }

    export interface Currency {
        id: string;
        code: string;
        format: string;
        decimal: string;
        thousand: string;
        rounding?: any;
        exchange: number;
        default: boolean;
    }

    export interface CartInterface {
        contents: Contents;
        discount_code?: any;
        total_items: number;
        total_unique_items: number;
        totals: Totals2;
        currency: Currency;
    }



