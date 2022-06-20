"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alterAppointmentStatusTable1655358528786 = void 0;
class alterAppointmentStatusTable1655358528786 {
    constructor() {
        this.name = 'alterAppointmentStatusTable1655358528786';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "appointment_statuses" ADD "is_default" boolean NOT NULL DEFAULT false`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "appointment_statuses" DROP COLUMN "is_default"`);
    }
}
exports.alterAppointmentStatusTable1655358528786 = alterAppointmentStatusTable1655358528786;
//# sourceMappingURL=1655358528786-alterAppointmentStatusTable.js.map