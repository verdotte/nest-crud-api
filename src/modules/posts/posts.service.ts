import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';
import { PostRepository } from './posts.repository';

@Injectable()
export class PostsService {
  constructor(public readonly postRepository: PostRepository) {}

  create(createPostDto: CreatePostDto) {
    const post = new Post();
    post.description = createPostDto.description;
    post.title = createPostDto.title;
    post.imageUrl = createPostDto.imageUrl;
    post.active = true;

    return this.postRepository.save(post);
  }

  findAll() {
    return this.postRepository.find();
  }

  findOne(id: number) {
    return this.postRepository.findOne({ where: { id } });
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return this.postRepository.update(id, updatePostDto);
  }

  remove(id: number) {
    return this.postRepository.delete(id);
  }
}
