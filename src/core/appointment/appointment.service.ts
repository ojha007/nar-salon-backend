import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import CustomException from 'src/exceptions/custom.exception';
import { AppointmentQueryInterface } from 'src/interfaces/RequestQuery.interface';
import { getRepository, Repository } from 'typeorm';
import AppointmentEntity from './appointment.entity';
import AppointmentStatusEntity from './appointment.status.entity';
import { AppointmentDto, SlotRequestInterface } from './dto/Appointment.dto';
import AppointmentStatusService from './status.service';

@Injectable()
export default class AppointmentService {
  constructor(
    @InjectRepository(AppointmentEntity)
    private repository: Repository<AppointmentEntity>,
    private statusService: AppointmentStatusService,
  ) {}

  async create(payload: AppointmentDto): Promise<boolean> {
    let status: AppointmentStatusEntity =
      await this.statusService.defaultStatus();
    if (!status) throw new CustomException(422, 'MASTER_MISSING');
    payload.status = status;
    let slotRequest: SlotRequestInterface = {
      service: payload.service,
      date: payload.date,
      slotFrom: payload.slotFrom,
      slotTo: payload.slotTo,
    };
    let isSlotBooked = await this.isSlotBooked(slotRequest);
    if (isSlotBooked) throw new CustomException(422, 'SLOT_NOT_AVALILABLE');
    await this.repository.save(payload);
    return;
  }

  private async isSlotBooked(request: SlotRequestInterface): Promise<number> {
    return await this.repository.count({
      where: {
        date: request.date,
        slotFrom: request.slotFrom,
        service: request.service,
        slotTo: request.slotTo,
        status: 1,
      },
    });
  }

  async findAll(params: AppointmentQueryInterface) {
    let baseQuery = `
    select 
        ap.id,
        ap.date::text,
        ap.slot_to                                      as "slotTo",
        ap.slot_from                                    as "slotFrom",
        ap.customer_name                                as "customerName",
        ap.phone,
        json_build_object('id', se.id, 'name', se.name) as service,
        json_build_object('id', st.id, 'name', st.name) as status
      from appointments ap
      join salon_services se on ap.service_id = se.id
      join appointment_statuses st on st.id = ap.status_id
      where true 
      
    `;
    let replacements: (string | number)[] = [];
    if (params.statusId) {
      baseQuery += ` and st.id=$${replacements.length + 1}`;
      replacements.push(params.statusId);
    }
    if (params.serviceId) {
      baseQuery += ` and se.id=$${replacements.length + 1}`;
      replacements.push(params.serviceId);
    }
    if (params.date) {
      baseQuery += ` and date::date=$${replacements.length + 1}`;
      replacements.push(params.date);
    }
    baseQuery += ` order by date desc,slot_from asc `;
    if (params.limit) {
      baseQuery += ` limit $${replacements.length + 1}`;
      replacements.push(params.limit);
    }
    if (params.offset) {
      baseQuery += ` offset $${replacements.length + 1}`;
      replacements.push(params.offset);
    }
    return this.repository.query(baseQuery, replacements);
  }
}
