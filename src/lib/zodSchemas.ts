import { title } from "process";
import { z } from "zod";

export const categorySchema = z.object({
  title: z.string(),
  imageUrls: z.array(z.string()),
});

export const subCategorySchema = z.object({
  title: z.string(),
  imageUrls: z.array(z.string()),
  categoryId: z.string(),
});

export const sparePartSchema = z.object({
  title: z.string(),
  imageUrls: z.array(z.string()), // Array of strings for image URLs
  location: z.string(),
  town: z.string(),
  brand: z.string(),
  model: z.string(),
  partNumber: z.string(),
  condition: z.enum(["NEW", "USED"]), // Assuming CONDITION is an enum with values NEW and USED
  description: z.string(),
  price: z.string(), // You can refine this to a more specific type like z.number() if necessary
  categoryId: z.string(), // Assuming categoryId is a string representing the ID of the category
  subcategoryId: z.string(), // This field will be null
});

export const mobilePhonesSchema = z.object({
  title: z.string(),
  imageUrls: z.array(z.string()), // Assuming it's a URL
  location: z.string(),
  town: z.string(),
  brand: z.string(),
  model: z.string(),
  storage: z.string(),
  ram: z.string(),
  os: z.string(),
  condition: z.enum(["NEW", "USED"]), // Assuming CONDITION is an enum with values NEW and USED
  description: z.string(),
  price: z.string(),
  categoryId: z.string(), // Assuming categoryId is a string representing the ID of the category
  subcategoryId: z.string(), // Assuming subcategoryId is a string representing the ID of the subcategory
});
export const fashionSchema = z.object({
  title: z.string(),
  imageUrls: z.array(z.string()), // Assuming it's a URL
  location: z.string(),
  town: z.string(),
  brand: z.string(),
  size: z.string(),
  color: z.string(),
  condition: z.enum(["NEW", "USED"]), // Assuming CONDITION is an enum with values NEW and USED
  description: z.string(),
  price: z.string(),
  categoryId: z.string(), // Assuming categoryId is a string representing the ID of the category
  subcategoryId: z.string(), // Assuming subcategoryId is a string representing the ID of the subcategory
});
export const constructionSchema = z.object({
  title: z.string(),
  imageUrls: z.array(z.string()), // Assuming it's a URL
  location: z.string(),
  town: z.string(),
  brand: z.string(),
  types: z.string(),
  condition: z.enum(["NEW", "USED"]), // Assuming CONDITION is an enum with values NEW and USED
  description: z.string(),
  price: z.string(),
  categoryId: z.string(), // Assuming categoryId is a string representing the ID of the category
  subcategoryId: z.string(), // Assuming subcategoryId is a string representing the ID of the subcategory
});
export const furnitureSchema = z.object({
  title: z.string(),
  imageUrls: z.array(z.string()), // Assuming it's a URL
  location: z.string(),
  town: z.string(),
  brand: z.string(),
  types: z.string(),
  condition: z.enum(["NEW", "USED"]), // Assuming CONDITION is an enum with values NEW and USED
  description: z.string(),
  price: z.string(),
  categoryId: z.string(), // Assuming categoryId is a string representing the ID of the category
  subcategoryId: z.string(), // Assuming subcategoryId is a string representing the ID of the subcategory
});
export const vehicleSchema = z.object({
  title: z.string(),
  imageUrls: z.array(z.string()), // Assuming it's a URL
  location: z.string(),
  town: z.string(),
  brand: z.string(),
  model: z.string(),
  mileage: z.string(),
  engineSize: z.string(),
  wheelDrive: z.string(),
  bodyType: z.string(),
  yom: z.string(),
  condition: z.enum(["NEW", "USED"]), // Assuming CONDITION is an enum with values NEW and USED
  description: z.string(),
  price: z.string(),
  categoryId: z.string(), // Assuming categoryId is a string representing the ID of the category
  subcategoryId: z.string(), // Assuming subcategoryId is a string representing the ID of the subcategory
});
export const toySchema = z.object({
  title: z.string(),
  imageUrls: z.array(z.string()), // Assuming it's a URL
  location: z.string(),
  town: z.string(),
  brand: z.string(),
  model: z.string(),
  type: z.string(),
  condition: z.enum(["NEW", "USED"]), // Assuming CONDITION is an enum with values NEW and USED
  description: z.string(),
  price: z.string(),
  categoryId: z.string(), // Assuming categoryId is a string representing the ID of the category
  subcategoryId: z.string(), // Assuming subcategoryId is a string representing the ID of the subcategory
});
export const agricultureSchema = z.object({
  title: z.string(),
  imageUrls: z.array(z.string()), // Assuming it's a URL
  location: z.string(),
  town: z.string(),
  brand: z.string(),
  model: z.string(),
  yom: z.string(),
  condition: z.enum(["NEW", "USED"]), // Assuming CONDITION is an enum with values NEW and USED
  description: z.string(),
  price: z.string(),
  categoryId: z.string(), // Assuming categoryId is a string representing the ID of the category
  subcategoryId: z.string(), // Assuming subcategoryId is a string representing the ID of the subcategory
});
export const servicesSchema = z.object({
  title: z.string(),
  imageUrls: z.array(z.string()), // Assuming it's a URL
  location: z.string(),
  town: z.string(),
  occupation: z.string(),
  rate: z.string(),
  description: z.string(),
  price: z.string(),
  categoryId: z.string(), // Assuming categoryId is a string representing the ID of the category
  subcategoryId: z.string(), // Assuming subcategoryId is a string representing the ID of the subcategory
});

export const electronicsSchema = z.object({
  title: z.string(),
  imageUrls: z.array(z.string()), // Assuming it's a URL
  location: z.string(),
  town: z.string(),
  brand: z.string(),
  model: z.string(),
  specs: z.string(),
  condition: z.enum(["NEW", "USED"]),
  description: z.string(),
  price: z.string(),
  categoryId: z.string(), // Assuming categoryId is a string representing the ID of the category
  subcategoryId: z.string(), // Assuming subcategoryId is a string representing the ID of the subcategory
});
export const lightsSchema = z.object({
  title: z.string(),
  imageUrls: z.array(z.string()), // Assuming it's a URL
  location: z.string(),
  town: z.string(),
  brand: z.string(),
  model: z.string(),
  type: z.string(),
  condition: z.enum(["NEW", "USED"]),
  description: z.string(),
  price: z.string(),
  categoryId: z.string(), // Assuming categoryId is a string representing the ID of the category
  subcategoryId: z.string(), // Assuming subcategoryId is a string representing the ID of the subcategory
});
export const realEstateSchema = z.object({
  title: z.string(),
  imageUrls: z.array(z.string()), // Assuming it's a URL
  location: z.string(),
  town: z.string(),
  type: z.string(),
  size: z.string(),
  condition: z.enum(["NEW", "USED"]),
  description: z.string(),
  price: z.string(),
  categoryId: z.string(), // Assuming categoryId is a string representing the ID of the category
  subcategoryId: z.string(), // Assuming subcategoryId is a string representing the ID of the subcategory
});

export const packageSchema = z.object({
  name: z.string(),
  ads: z.string(),
  days: z.string(),
  price: z.string(),
});

export const sellerSchema = z.object({
  phone: z.string(),
  address: z.string(),
  county: z.string(),
  whatsappUrl: z.string(),
  packageId: z.string(),
});
