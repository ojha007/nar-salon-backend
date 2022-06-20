export declare class PaginationInterface {
    limit: number;
    offset: number;
}
export declare class AppointmentQueryInterface extends PaginationInterface {
    statusId: number;
    serviceId: number;
    date: string;
}
