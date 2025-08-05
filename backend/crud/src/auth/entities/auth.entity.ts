import { Schema,Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type AuthDocument = Auth & Document;

@Schema({ timestamps: true })
export class Auth {
    
    @Prop({ required: true})
    username: string;

    @Prop({ unique: true,required:true })
    email: string;
    
    @Prop({ required: true})
    password: string
}

export const AuthSchema = SchemaFactory.createForClass(Auth);
