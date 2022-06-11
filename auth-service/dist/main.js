"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const auth_module_1 = require("./auth/auth.module");
const cookieParser = require("cookie-parser");
async function bootstrap() {
    const app = await core_1.NestFactory.create(auth_module_1.AuthModule);
    app.use(cookieParser());
    app.enableCors({
        origin: '*',
    });
    await app.listen(8001);
}
bootstrap();
//# sourceMappingURL=main.js.map