import { IsString, IsOptional } from 'class-validator';

export class CreatePostDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  @IsOptional()
  imageUrl: string;
}
