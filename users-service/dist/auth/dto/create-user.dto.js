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
exports.CreateUserDto = void 0;
const class_validator_1 = require("class-validator");
class CreateUserDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Name shouldn't be empty" }),
    (0, class_validator_1.Min)(5, { message: 'Name should have atleast 5 characters' }),
    (0, class_validator_1.Max)(20, { message: "Name shouldn't be more than 20 characters" }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Email shouldn't be empty" }),
    (0, class_validator_1.Min)(5, { message: 'Email should have atleast 5 characters' }),
    (0, class_validator_1.Max)(30, { message: "Email shouldn't be more than 30 characters" }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Username shouldn't be empty" }),
    (0, class_validator_1.Min)(5, { message: 'Username should have atleast 5 characters' }),
    (0, class_validator_1.Max)(20, { message: "Username shouldn't be more than 20 characters" }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "username", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Password shouldn't be empty" }),
    (0, class_validator_1.Min)(8, { message: 'Password should have atleast 8 characters' }),
    (0, class_validator_1.Max)(16, { message: "Password shouldn't be more than 16 characters" }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
exports.CreateUserDto = CreateUserDto;
//# sourceMappingURL=create-user.dto.js.map