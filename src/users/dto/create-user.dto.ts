import { IsBoolean, IsEmail, IsEnum, IsString } from 'class-validator';
import { UserType } from '../entities/user.entity';

export class CreateUserDto {
  @IsString()
  readonly username: string;
  @IsEmail()
  readonly email: string;
  @IsString()
  readonly password: string;
  @IsEnum(UserType)
  readonly userType: UserType;
  @IsBoolean()
  readonly isActive: boolean;
  readonly createdAt: Date;
  readonly modifiedAt: Date;
}
