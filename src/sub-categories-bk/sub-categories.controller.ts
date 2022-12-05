import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateSubCategoryDto } from './dto/create-sub-categories.dto';
import { UpdateSubCategoryDto } from './dto/update-sub-categories.dto';

import { SubCategory } from './schemas/sub_categories.schema';
import { SubCategoriesService } from './sub-categories.service';

@Controller('SubCategories')
export class SubCategoriesController {
  constructor(private readonly sub_categoriesService: SubCategoriesService) {}

  @Get(':sub_categoryId')
  async getSubCategory(@Param('sub_categoryId') sub_categoryId: string): Promise<SubCategory> {
    return this.sub_categoriesService.getSubCategoryById(sub_categoryId);
  }
  
  @Get()
  async getSubCategories(): Promise<SubCategory[]> {
      return this.sub_categoriesService.getSubCategories();
  }

  @Post()
  async createSubCategory(@Body() createSubCategoryDto: CreateSubCategoryDto): Promise<SubCategory> {
      return this.sub_categoriesService.createSubCategory(createSubCategoryDto.name, createSubCategoryDto.categoryId)
  }

  @Patch(':sub_categoryid')
  async updateCategory(@Param('sub_categoryid') sub_categoryid: string, @Body() updateSubCategoryDto: UpdateSubCategoryDto): Promise<SubCategory> {
      return this.sub_categoriesService.updateSubCategory(sub_categoryid, updateSubCategoryDto);
  }
}
