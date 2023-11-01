import { Body, Controller, Delete, Get, Param, Post, Put, Query, Ip } from '@nestjs/common';
import { UserManagementService } from './user-management.service';
import { rb } from '@flexsolver/rbts';


@Controller('search_engine')
export class UserManagementController {
    constructor(
        private userManagementService: UserManagementService
    ) { }

    @Post('user-management')
    async mainTesting() {
        try {
            const result = { name: 'Ng Shi Eng', age: '22', birthday: '28-04-2001' }
            return rb().build(result);
        } catch (error) {
            throw error;
        }
    }
}