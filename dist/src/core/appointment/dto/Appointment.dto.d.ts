import SalonServiceEntitiy from 'src/core/salon/entities/salon.service.entity';
import AppointmentStatusEntity from '../appointment.status.entity';
export declare class AppointmentDto {
    date: string;
    slotFrom: string;
    slotTo: string;
    customerName: string;
    phone: string;
    notes: string;
    service: SalonServiceEntitiy;
    userId?: number;
    status?: AppointmentStatusEntity;
}
export declare class SlotRequestInterface {
    service: SalonServiceEntitiy;
    date: string;
    slotFrom: string;
    slotTo: string;
}
export declare class SlotUpdateInterface extends SlotRequestInterface {
    id: number;
}
