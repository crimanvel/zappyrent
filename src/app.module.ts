import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { BooksModule } from './books/books.module';
import { FileUploadModule } from './file-upload/file-upload.module';

@Module({
  imports: [UsersModule, AuthModule, BooksModule, FileUploadModule],
})
export class AppModule {}
