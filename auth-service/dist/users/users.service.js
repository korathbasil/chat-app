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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const users_model_1 = require("./users.model");
const users_repo_1 = require("./users.repo");
const crypto_hash_1 = require("../util/crypto-hash");
let UsersService = class UsersService {
    constructor(usersRepo) {
        this.usersRepo = usersRepo;
    }
    async signupUser(name, email, username, password) {
        const user = await this.usersRepo.findOne({ username: username });
        if (user)
            throw new common_1.ConflictException('User already exists');
        const hashedPassword = await (0, crypto_hash_1.hashString)(password);
        const newUser = {
            name,
            email,
            username,
            password: hashedPassword,
            role: users_model_1.Role.USER,
        };
        return this.usersRepo.insertOne(newUser);
    }
    async loginUser(username, password) {
        const user = await this.usersRepo.findOne({ username: username });
        if (!user)
            throw new common_1.NotFoundException('User not found');
        if (!user.password)
            throw new common_1.NotFoundException('User not found');
        const doPasswordsMatch = await (0, crypto_hash_1.compareHash)(user.password, password);
        if (!doPasswordsMatch)
            throw new common_1.UnauthorizedException('Invalid password');
        return user;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_repo_1.UsersRepository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map