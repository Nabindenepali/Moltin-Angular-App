

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

export interface 11961513883048353972 {
    id: string;
    order: number;
    created_at: string;
    updated_at: string;
    parent?: any;
    slug: string;
    status: Status2;
    title: string;
    description: string;
}

    export interface Data2 {
        1196151388304835397: 11961513883048353972;
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

    export interface Data11 {
        key: string;
        value: string;
    }

    export interface Status4 {
        value: string;
        data: Data11;
    }

    export interface Data10 {
        id: string;
        order?: any;
        created_at: string;
        updated_at: string;
        slug: string;
        status: Status4;
        title: string;
        description: string;
    }

    export interface Brand {
        value: string;
        data: Data10;
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

    export interface Data12 {
        formatted: Formatted;
        rounded: Rounded;
        raw: Raw;
    }

    export interface Price {
        value: string;
        data: Data12;
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

    export interface ProductInterface {
        id: string;
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
        brand: Brand;
        price: Price;
        is_variation: boolean;
        modifiers: any[];
        images: Image[];
    }



