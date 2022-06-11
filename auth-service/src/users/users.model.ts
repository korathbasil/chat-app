import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export class UserAccount extends Document {
  @Prop({ type: String, required: true })
  kind: string;

  @Prop({ type: String, required: true })
  uid: string;
}
export enum Role {
  SUPERUSER = 'SUPERUSER',
  PREMIUMUSER = 'PREMIUMUSER',
  USER = 'USER',
}

@Schema({ timestamps: { createdAt: true, updatedAt: true } })
export class User extends Document {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true })
  email: string;

  @Prop({ type: String })
  phone?: string;

  @Prop({ type: String, required: true })
  username: string;

  @Prop({ type: String })
  password?: string;

  @Prop([{ type: UserAccount }])
  accounts?: UserAccount[];

  @Prop({ type: String, required: true })
  role: Role;

  @Prop({ type: String, default: '' })
  profilePicture: string;
}

export const userSchema = SchemaFactory.createForClass(User);
