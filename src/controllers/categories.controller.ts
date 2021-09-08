import { Controller, Get } from '@nestjs/common';

import { CategoriesService } from './../services/categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get()
  getAll() {
    return this.categoriesService.getAll();
  }
}
