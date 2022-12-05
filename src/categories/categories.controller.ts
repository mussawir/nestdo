import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-categories.dto';
import { UpdateCategoryDto } from './dto/update-categories.dto';

import { Category } from './schemas/categories.schema';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get(':categoryId')
  async getCategory(@Param('categoryId') categoryId: string): Promise<Category> {
    return this.categoriesService.getCategoryById(categoryId);
  }
  
  @Get()
  async getCategories(): Promise<Category[]> {
      return this.categoriesService.getCategories();
  }

  @Post()
  async createCategory(@Body() createCategoryDto: CreateCategoryDto): Promise<Category> {
      return this.categoriesService.createCategory(createCategoryDto.name)
  }

  @Patch(':categoryId')
  async updateCategory(@Param('categoryId') categoryId: string, @Body() updateCategoryDto: UpdateCategoryDto): Promise<Category> {
      return this.categoriesService.updateCategory(categoryId, updateCategoryDto);
  }
}
