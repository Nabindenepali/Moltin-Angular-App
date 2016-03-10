   export interface Data {
        key: string;
        value: string;
    }

    export interface Status {
        value: string;
        data: Data;
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
        id: any;
        name: string;
        url: Url;
        segments: Segments;
        details: Details;
    }

    export interface BrandsInterface {
        id: string;
        order?: any;
        created_at: string;
        updated_at: string;
        slug: string;
        status: Status;
        title: string;
        description: string;
        images: Image[];
    }



