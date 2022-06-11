"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const create_user_dto_1 = require("../users/dto/create-user.dto");
const serialize_interceptor_1 = require("./interceptors/serialize.interceptor");
const user_dto_1 = require("./dto/user.dto");
const login_user_dto_1 = require("./dto/login-user.dto");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async postSignup(userData) {
        const { name, email, username, password } = userData;
        try {
            const savedUser = await this.usersService.signupUser(name, email, username, password);
            return savedUser;
        }
        catch (e) {
            return e;
        }
    }
    async postLogin(loginData) {
        const { username, password } = loginData;
        try {
            const user = await this.usersService.loginUser(username, password);
            return user;
        }
        catch (e) {
            return e;
        }
    }
    postLogout() { }
    getCurrentUser() {
        return 'Hello';
    }
    getHello() {
        return 'Hello';
    }
};
__decorate([
    (0, serialize_interceptor_1.UseSerializeInterceptor)(user_dto_1.UserDto),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, common_1.Post)('/signup'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "postSignup", null);
__decorate([
    (0, serialize_interceptor_1.UseSerializeInterceptor)(user_dto_1.UserDto),
    (0, common_1.Post)('/login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_user_dto_1.LoginUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "postLogin", null);
__decorate([
    (0, common_1.Post)('/logout'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "postLogout", null);
__decorate([
    (0, common_1.Get)('/current-user'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getCurrentUser", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getHello", null);
UsersController = __decorate([
    (0, common_1.Controller)('/api/v1/users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map