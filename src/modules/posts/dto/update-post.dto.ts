import { PartialType } from '@nestjs/mapped-types';
import { IsOptional, IsBoolean } from 'class-validator';
import { CreatePostDto } from './create-post.dto';

export class UpdatePostDto extends PartialType(CreatePostDto) {
  @IsBoolean()
  @IsOptional()
  active: boolean;
}
