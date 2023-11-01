import { Module } from '@nestjs/common';
import { UserManagementService } from './user-management.service';
import { UserManagementController } from './user-management.controller';


@Module({
    imports: [],
    controllers: [UserManagementController],
    providers: [UserManagementService],
    exports: [UserManagementService]
})
export class UserManagementModule {}