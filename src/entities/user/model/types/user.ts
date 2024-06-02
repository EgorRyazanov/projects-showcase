import { Image } from '@/shared/lib/types/image.ts';

export interface User {
    readonly email: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly patronymic: string;
    readonly roles: Array<string>;
    readonly avatar: Image;
}