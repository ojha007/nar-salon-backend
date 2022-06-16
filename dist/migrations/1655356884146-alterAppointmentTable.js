"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alterAppointmentTable1655356884146 = void 0;
class alterAppointmentTable1655356884146 {
    constructor() {
        this.name = 'alterAppointmentTable1655356884146';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "appointments" ADD "customer_name" character varying`);
        await queryRunner.query(`ALTER TABLE "appointments" ADD "phone" character varying(10)`);
        await queryRunner.query(`ALTER TABLE "appointments" ADD "service_id" integer`);
        await queryRunner.query(`ALTER TABLE "appointments" ADD CONSTRAINT "FK_2a2088e8eaa8f28d8de2bdbb857" FOREIGN KEY ("service_id") REFERENCES "salon_services"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "appointments" DROP CONSTRAINT "FK_2a2088e8eaa8f28d8de2bdbb857"`);
        await queryRunner.query(`ALTER TABLE "appointments" DROP COLUMN "service_id"`);
        await queryRunner.query(`ALTER TABLE "appointments" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "appointments" DROP COLUMN "customer_name"`);
    }
}
exports.alterAppointmentTable1655356884146 = alterAppointmentTable1655356884146;
//# sourceMappingURL=1655356884146-alterAppointmentTable.js.map