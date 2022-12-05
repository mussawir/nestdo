import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateSubCategoryDto } from './dto/create-subcategories.dto';
import { UpdateSubCategoryDto } from './dto/update-subcategories.dto';

import { SubCategory } from './schemas/subcategories.schema';
import { SubCategoriesService } from './subcategories.service';

@Controller('categories')
export class SubCategoriesController {
  constructor(private readonly subCategoriesService: SubCategoriesService) {}

  @Get(':subcategoryId')
  async getSubCategory(@Param('subcategoryId') subcategoryId: string): Promise<SubCategory> {
    return this.subCategoriesService.getSubCategoryById(subcategoryId);
  }
  
  @Get()
  async getSubCategories(): Promise<SubCategory[]> {
      return this.subCategoriesService.getSubCategories();
  }

  @Post()
  async createSubCategory(@Body() createSubCategoryDto: CreateSubCategoryDto): Promise<SubCategory> {
      return this.subCategoriesService.createSubCategory(createSubCategoryDto.name)
  }

  @Patch(':subategoryId')
  async updateSubCategory(@Param('subcategoryId') subcategoryId: string, @Body() updateSubCategoryDto: UpdateSubCategoryDto): Promise<SubCategory> {
      return this.subCategoriesService.updateSubCategory(subcategoryId, updateSubCategoryDto);
  }
}
