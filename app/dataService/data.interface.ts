    export interface Data {
        key: string;
        value: string;
    }

    export interface Status {
        value: string;
        data: Data;
    }

    export interface CategoryInterface {
        id: string;
        order: number;
        created_at: string;
        updated_at: string;
        parent?: any;
        slug: string;
        status: Status;
        title: string;
        description: string;
        images: any[];
    }



