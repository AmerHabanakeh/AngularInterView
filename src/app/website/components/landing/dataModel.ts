export interface FilterData {
    filters: {
        price?: {
            min: number;
            max: number;
        };
        status?: {
            status: string;
        };
        category?: {
            id: number;
        };
    };
}