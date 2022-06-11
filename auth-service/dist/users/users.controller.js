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
const jwt_1 = require("@nestjs/jwt");
const users_service_1 = require("../users/users.service");
const create_user_dto_1 = require("../users/dto/create-user.dto");
const serialize_interceptor_1 = require("./interceptors/serialize.interceptor");
const user_dto_1 = require("./dto/user.dto");
const login_user_dto_1 = require("./dto/login-user.dto");
let UsersController = class UsersController {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async postSignup(userData, res) {
        const { name, email, username, password } = userData;
        try {
            const savedUser = await this.usersService.signupUser(name, email, username, password);
            const token = await this.jwtService.signAsync({
                _id: savedUser._id,
                name: savedUser.name,
                username: savedUser.username,
                profilePicture: savedUser.profilePicture,
            });
            savedUser.token = token;
            res.cookie('token', token, {
                httpOnly: true,
            });
            return savedUser;
        }
        catch (e) {
            return e;
        }
    }
    async postLogin(loginData, res) {
        const { username, password } = loginData;
        try {
            const user = await this.usersService.loginUser(username, password);
            const token = await this.jwtService.signAsync({
                _id: user._id,
                name: user.name,
                username: user.username,
                profilePicture: user.profilePicture,
            });
            user.token = token;
            res.cookie('token', token, {
                httpOnly: true,
            });
            return user;
        }
        catch (e) {
            return e;
        }
    }
    postLogout(res) {
        res.clearCookie('token');
        res.status(200);
        return;
    }
    async getCurrentUser(req, res) {
        const token = req.cookies['token'];
        if (!token)
            throw new common_1.UnauthorizedException('Please login to continue');
        try {
            const userData = await this.jwtService.verifyAsync(token, {
                secret: 'asdfgh',
            });
            const loggedInUser = await this.usersService.getLoggedInUser(userData._id);
            loggedInUser.token = token;
            res.cookie('token', token, {
                httpOnly: true,
            });
            return loggedInUser;
        }
        catch (e) {
            throw new common_1.UnauthorizedException('Please login to continue');
        }
    }
};
__decorate([
    (0, serialize_interceptor_1.UseSerializeInterceptor)(user_dto_1.UserDto),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, common_1.Post)('/signup'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "postSignup", null);
__decorate([
    (0, serialize_interceptor_1.UseSerializeInterceptor)(user_dto_1.UserDto),
    (0, common_1.Post)('/login'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_user_dto_1.LoginUserDto, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "postLogin", null);
__decorate([
    (0, common_1.Post)('/logout'),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "postLogout", null);
__decorate([
    (0, serialize_interceptor_1.UseSerializeInterceptor)(user_dto_1.UserDto),
    (0, common_1.Get)('/current-user'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getCurrentUser", null);
UsersController = __decorate([
    (0, common_1.Controller)('/api/v1/users'),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map