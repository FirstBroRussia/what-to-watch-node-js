import { DocumentType } from "@typegoose/typegoose/lib/types.js";
import CreateUserDTO from "./dto/create-user.dto.js";
import { UserEntity } from "./user.entity.js";

export interface UserServiceInterface {
    create(dto: CreateUserDTO, salt: string): Promise<DocumentType<UserEntity>>;
    findByEmail(email: string): Promise<DocumentType<UserEntity> | null>;
    findByUserId(email: string): Promise<DocumentType<UserEntity> | null>;
    findOrCreate(dto: CreateUserDTO, salt: string): Promise<DocumentType<UserEntity>>;
}
