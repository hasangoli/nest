import { IsOptional, IsPositive } from 'class-validator';

export class PaginationQueryDto {
  @IsOptional()
  @IsPositive()
  // @Type(() => Number) // make sure the value is a number
  limit: number;

  @IsOptional()
  @IsPositive()
  // @Type(() => Number) // removed this decorator due to enabling transformOptions.enableImplicitConversion in main.ts
  offset: number;
}
