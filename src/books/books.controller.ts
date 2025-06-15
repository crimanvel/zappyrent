import { Controller, Post, Get, Put, Delete, Param, Body, UseGuards, Req, NotFoundException } from '@nestjs/common';
import { BooksService } from './books.service';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { Request } from 'express';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
@UseGuards(JwtAuthGuard)
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Post()
  create(@Body() body: CreateBookDto, @Req() req: Request) {
    return this.booksService.create(req.user['userId'], body);
  }

  @Get()
  findAll(@Req() req: Request) {
    return this.booksService.findAll(req.user['userId']);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: UpdateBookDto, @Req() req: Request) {
    const updated = this.booksService.update(req.user['userId'], +id, body);
    if (!updated) throw new NotFoundException('Book not found');
    return updated;
  }

  @Delete(':id')
  delete(@Param('id') id: string, @Req() req: Request) {
    const deleted = this.booksService.delete(req.user['userId'], +id);
    if (!deleted) throw new NotFoundException('Book not found');
    return { message: 'Book deleted' };
  }
}
