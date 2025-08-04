import { Schema,Prop, SchemaFactory } from "@nestjs/mongoose";
import { User } from "src/users/entities/user.entity";

export type UserSchema = User & Document;

@Schema({ timestamps: true })
export class Auth {
    
    @Prop({ required: true})
    username: string;

    @Prop({ unique: true,required:true })
    email: string;
    
    @Prop({ required: true})
    password: string
}
