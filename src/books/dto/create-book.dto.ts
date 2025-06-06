import { IsString, IsNotEmpty, IsInt, IsOptional, IsUrl, Min } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  author: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsInt()
  @Min(0)
  year: number;

  @IsUrl()
  @IsOptional()
  coverImageUrl?: string;
}
