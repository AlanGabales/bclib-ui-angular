
import { Status } from "../_helpers/enums/status";
import { Role } from "./role";

export class User {
    user?: {
        id?: string;
        username?: string;
        password?: string;
        first_name?: string;
        last_name?: string;
        role?: Role;
        status?: Status;
        token?: string;
        email?: string;
        created_at?: Date;
        updated_at?: Date;
        created_by?: Date;
        
    }
    access_token?: string;
}