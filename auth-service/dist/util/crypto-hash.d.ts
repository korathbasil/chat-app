export declare function hashString(password: string): Promise<string>;
export declare function compareHash(hashedPassword: string, password: string): Promise<boolean>;
