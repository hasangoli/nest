import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll() {
    return 'This action returns all coffees';
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
