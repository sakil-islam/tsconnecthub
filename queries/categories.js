import { Category } from "@/model/category-model";
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/lib/convertData";

export async function getCategories() {
  try {
    const categories = await Category.find({}).lean();
    return replaceMongoIdInArray(categories);
  } catch (error) {
    throw new Error(error);
  }
}

export async function getCategoryDetails(categoryId) {
  try {
    const category = await Category.findById(categoryId).lean();
    return replaceMongoIdInObject(category);
  } catch (error) {
    throw new Error(error);
  }
}
