import SalonServiceEntitiy from 'src/core/salon/entities/salon.service.entity';
import AppointmentStatusEntity from '../appointment.status.entity';
export declare class AppointmentDto {
    date: string;
    slotFrom: string;
    slotTo: string;
    customerName: string;
    phone: string;
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
