import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create.dto';
import { UpdateCategoryDto } from './dto/update.dto';

import { SubCategory } from './schemas/sub_categories.schema';
import { CategoriesService } from './sub_categories.service';

@Controller('sub_categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get(':sub_categoryid')
  async getCategory(@Param('sub_categoryid') sub_categoryid: string): Promise<SubCategory> {
    return this.categoriesService.getCategoryById(sub_categoryid);
  }
  
  @Get()
  async getCategories(): Promise<SubCategory[]> {
      return this.categoriesService.getCategories();
  }

  @Post()
  async createCategory(@Body() createCategoryDto: CreateCategoryDto): Promise<SubCategory> {
      return this.categoriesService.createCategory(createCategoryDto.name)
  }

  @Patch(':sub_categoryid')
  async updateCategory(@Param('sub_categoryid') sub_categoryid: string, @Body() updateCategoryDto: UpdateCategoryDto): Promise<SubCategory> {
      return this.categoriesService.updateCategory(sub_categoryid, updateCategoryDto);
  }
}
