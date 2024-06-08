import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(@Query() query: any) {
    const { limit, offset } = query;
    return `This action returns all coffees with the limitation of ${limit} and offset of ${offset}`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns #${id} coffees`;
  }

  @Post()
  create(@Body() body: any) {
    console.log(body);
    return 'This action adds a new coffee';
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    console.log(body);
    return `This action updates a #${id} coffees`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} coffees`;
  }
}
