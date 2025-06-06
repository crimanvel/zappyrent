import { IsString, IsOptional, IsInt, IsUrl, Min } from 'class-validator';

export class UpdateBookDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  author?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsInt()
  @Min(0)
  @IsOptional()
  year?: number;

  @IsUrl()
  @IsOptional()
  coverImageUrl?: string;
}
