import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { PostRepository } from './posts.repository';

@Module({
  controllers: [PostsController],
  imports: [TypeOrmModule.forFeature([PostRepository])],
  providers: [PostsService],
})
export class PostsModule {}
