"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SerializeInterceptor = exports.UseSerializeInterceptor = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const rxjs_1 = require("rxjs");
function UseSerializeInterceptor(Dto) {
    return (0, common_1.UseInterceptors)(new SerializeInterceptor(Dto));
}
exports.UseSerializeInterceptor = UseSerializeInterceptor;
class SerializeInterceptor {
    constructor(dto) {
        this.dto = dto;
    }
    intercept(context, next) {
        return next.handle().pipe((0, rxjs_1.map)((responseData) => {
            if (responseData.username) {
                return (0, class_transformer_1.plainToInstance)(this.dto, responseData, {
                    excludeExtraneousValues: true,
                });
            }
            else {
                return responseData;
            }
        }));
    }
}
exports.SerializeInterceptor = SerializeInterceptor;
//# sourceMappingURL=serialize.interceptor.js.map