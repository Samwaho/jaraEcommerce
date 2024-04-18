"use server";

import {
  Agriculture,
  Category,
  Construction,
  Electronics,
  Fashion,
  Furniture,
  Lights,
  MobilePhones,
  Services,
  SparePart,
  Toys,
  Vehicles,
  subCategories,
  RealEstate,
} from "@prisma/client";
import { db } from "./db";

export const upsertCategory = async (categoryData: Category) => {
  try {
    const category = await db.category.upsert({
      where: {
        id: categoryData.id,
      },
      create: categoryData,
      update: categoryData,
    });
    return category;
  } catch (error) {
    console.log("🚀 ~ upsertCategory ~ error:", error);
  }
};

export const createCategory = async (categoryData: Category) => {
  try {
    const category = await db.category.create({
      data: categoryData,
    });
    return category;
  } catch (error) {
    console.log("🚀 ~ createCategory ~ error:", error);
  }
};

export const createSubCategory = async (subCategoryData: subCategories) => {
  try {
    const subCategory = await db.subCategories.create({
      data: subCategoryData,
    });
    return subCategory;
  } catch (error) {
    console.log("🚀 ~ createSubCategory ~ error:", error);
  }
};

export const createSparePart = async (sparePart: SparePart) => {
  try {
    const newSparePart = await db.sparePart.create({
      data: sparePart,
    });
    return newSparePart;
  } catch (error) {
    console.log("🚀 ~ createSparePart ~ error:", error);
  }
};

export const createMobilePhone = async (mobilePhone: MobilePhones) => {
  try {
    const newMobilePhones = await db.mobilePhones.create({
      data: mobilePhone,
    });
    return newMobilePhones;
  } catch (error) {
    console.log("🚀 ~ createMobilePhone ~ error:", error);
  }
};

export const createFashion = async (fashion: Fashion) => {
  try {
    const fashionData = await db.fashion.create({
      data: fashion,
    });
    return fashionData;
  } catch (error) {
    console.log("🚀 ~ createFashion ~ error:", error);
  }
};
export const createConstruction = async (construction: Construction) => {
  try {
    const constructionData = await db.construction.create({
      data: construction,
    });
    return constructionData;
  } catch (error) {
    console.log("🚀 ~ createConstruction ~ error:", error);
  }
};
export const createFurniture = async (furniture: Furniture) => {
  try {
    const furnitureData = await db.furniture.create({
      data: furniture,
    });
    return furnitureData;
  } catch (error) {
    console.log("🚀 ~ createFurniture ~ error:", error);
  }
};
export const createVehicle = async (vehicle: Vehicles) => {
  try {
    const vehicleData = await db.vehicles.create({
      data: vehicle,
    });
    return vehicleData;
  } catch (error) {
    console.log("🚀 ~ createVehicle ~ error:", error);
  }
};

export const createToy = async (toy: Toys) => {
  try {
    const toyData = await db.toys.create({
      data: toy,
    });
    return toyData;
  } catch (error) {
    console.log("🚀 ~ createToy ~ error:", error);
  }
};

export const createAgriculture = async (agriculture: Agriculture) => {
  try {
    const agricultureData = await db.agriculture.create({
      data: agriculture,
    });
    return agricultureData;
  } catch (error) {
    console.log("🚀 ~ creatAgriculture ~ error:", error);
  }
};

export const createService = async (service: Services) => {
  try {
    const serviceData = await db.services.create({
      data: service,
    });
    return serviceData;
  } catch (error) {
    console.log("🚀 ~ createService ~ error:", error);
  }
};

export const createElecronic = async (electronic: Electronics) => {
  try {
    const electronicData = await db.electronics.create({
      data: electronic,
    });
    return electronicData;
  } catch (error) {
    console.log("🚀 ~ createElecronic ~ error:", error);
  }
};

export const createLight = async (light: Lights) => {
  try {
    const lightData = await db.lights.create({
      data: light,
    });
    return lightData;
  } catch (error) {
    console.log("🚀 ~ createLight ~ error:", error);
  }
};

export const createRealEstate = async (realEstate: RealEstate) => {
  try {
    const realEstateData = await db.realEstate.create({
      data: realEstate,
    });
    return realEstateData;
  } catch (error) {
    console.log("🚀 ~ createRealEstate ~ error:", error);
  }
};
export const getCategories = async () => {
  try {
    const categories = await db.category.findMany();
    return categories;
  } catch (error) {
    console.log("🚀 ~ getCategories ~ error:", error);
  }
};

export const getSubCategories = async (categoryId: string) => {
  try {
    const subCategories = await db.subCategories.findMany({
      where: { categoryId: categoryId },
    });
    return subCategories;
  } catch (error) {
    console.log("🚀 ~ getSubCategories ~ error:", error);
  }
};

export const getCostructionProducts = async () => {
  try {
    const constructionProducts = await db.construction.findMany();
    return constructionProducts;
  } catch (error) {
    console.log("🚀 ~ getCostructionProducts ~ error:", error);
  }
};

export const getServicesProducts = async () => {
  try {
    const servicesProducts = await db.services.findMany();
    return servicesProducts;
  } catch (error) {
    console.log("🚀 ~ getServicesProducts ~ error:", error);
  }
};

export const getElectronicsProducts = async () => {
  try {
    const electronicsProducts = await db.electronics.findMany();
    return electronicsProducts;
  } catch (error) {
    console.log("🚀 ~ getElectronicsProducts ~ error:", error);
  }
};

export const getLightsProducts = async () => {
  try {
    const lightsProducts = await db.lights.findMany();
    return lightsProducts;
  } catch (error) {
    console.log("🚀 ~ getLightsProducts ~ error:", error);
  }
};

export const getSparesProducts = async () => {
  try {
    const sparesProducts = await db.sparePart.findMany();
    return sparesProducts;
  } catch (error) {
    console.log("🚀 ~ getSparesProducts ~ error:", error);
  }
};

export const getAgricultureProducts = async () => {
  try {
    const agricultureProducts = await db.agriculture.findMany();
    return agricultureProducts;
  } catch (error) {
    console.log("🚀 ~ getAgricultureProducts ~ error:", error);
  }
};

export const getToyProducts = async () => {
  try {
    const toyProducts = await db.toys.findMany();
    return toyProducts;
  } catch (error) {
    console.log("🚀 ~ getToyProducts ~ error:", error);
  }
};

export const getFashionProducts = async () => {
  try {
    const fashionProducts = await db.fashion.findMany();
    return fashionProducts;
  } catch (error) {
    console.log("🚀 ~ getFashionProducts ~ error:", error);
  }
};

export const getMobilePhonesProducts = async () => {
  try {
    const mobilePhonesProducts = await db.mobilePhones.findMany();
    return mobilePhonesProducts;
  } catch (error) {
    console.log("🚀 ~ getMobilePhonesProducts ~ error:", error);
  }
};

export const getFurnitureProducts = async () => {
  try {
    const furnitureProducts = await db.furniture.findMany();
    return furnitureProducts;
  } catch (error) {
    console.log("🚀 ~ getFurnitureProducts ~ error:", error);
  }
};

export const getRealEstateProducts = async () => {
  try {
    const realEstateProducts = await db.realEstate.findMany();
    return realEstateProducts;
  } catch (error) {
    console.log("🚀 ~ getRealEstateProducts ~ error:", error);
  }
};

export const getVehiclesProducts = async () => {
  try {
    const vehiclesProducts = await db.vehicles.findMany();
    return vehiclesProducts;
  } catch (error) {
    console.log("🚀 ~ getVehiclesProducts ~ error:", error);
  }
};

export const getVehicleById = async (vehicleId: string) => {
  try {
    const vehicle = await db.vehicles.findUnique({
      where: {
        id: vehicleId,
      },
    });
    return vehicle;
  } catch (error) {
    console.log("🚀 ~ getVehicleById ~ error:", error);
  }
};

export const getAgricultureById = async (agricultureId: string) => {
  try {
    const agriculture = await db.agriculture.findUnique({
      where: {
        id: agricultureId,
      },
    });
    return agriculture;
  } catch (error) {
    console.log("🚀 ~ getAgricultureById ~ error:", error);
  }
};

export const getRealEstateById = async (realEstateId: string) => {
  try {
    const realEstate = await db.realEstate.findUnique({
      where: {
        id: realEstateId,
      },
    });
    return realEstate;
  } catch (error) {
    console.log("🚀 ~ getRealEstateById ~ error:", error);
  }
};

export const getConstructionById = async (constructionId: string) => {
  try {
    const construction = await db.construction.findUnique({
      where: {
        id: constructionId,
      },
    });
    return construction;
  } catch (error) {
    console.log("🚀 ~ getConstructionById ~ error:", error);
  }
};

export const getElectronicsById = async (electronicId: string) => {
  try {
    const electronic = await db.electronics.findUnique({
      where: {
        id: electronicId,
      },
    });
    return electronic;
  } catch (error) {
    console.log("🚀 ~ getElectronicsById ~ error:", error);
  }
};

export const getFashionById = async (fashionId: string) => {
  try {
    const fashion = await db.fashion.findUnique({
      where: {
        id: fashionId,
      },
    });
    return fashion;
  } catch (error) {
    console.log("🚀 ~ getFashionById ~ error:", error);
  }
};

export const getFurnitureById = async (furnitureId: string) => {
  try {
    const furniture = await db.furniture.findUnique({
      where: {
        id: furnitureId,
      },
    });
    return furniture;
  } catch (error) {
    console.log("🚀 ~ getFurnitureById ~ error:", error);
  }
};

export const getLightsById = async (lightsId: string) => {
  try {
    const lights = await db.lights.findUnique({
      where: {
        id: lightsId,
      },
    });
    return lights;
  } catch (error) {
    console.log("🚀 ~ getLightsById ~ error:", error);
  }
};

export const getMobilePhonesById = async (phoneId: string) => {
  try {
    const mobilePhones = await db.mobilePhones.findUnique({
      where: {
        id: phoneId,
      },
    });
    return mobilePhones;
  } catch (error) {
    console.log("🚀 ~ getMobilePhonesById ~ error:", error);
  }
};

export const getServicesById = async (serviceId: string) => {
  try {
    const service = await db.services.findUnique({
      where: {
        id: serviceId,
      },
    });
    return service;
  } catch (error) {
    console.log("🚀 ~ getServicesById ~ error:", error);
  }
};

export const getSparePartsById = async (sparePartId: string) => {
  try {
    const sparePart = await db.sparePart.findUnique({
      where: {
        id: sparePartId,
      },
    });
    return sparePart;
  } catch (error) {
    console.log("🚀 ~ getSparePartsById ~ error:", error);
  }
};

export const getToysById = async (toyId: string) => {
  try {
    const toy = await db.toys.findUnique({
      where: {
        id: toyId,
      },
    });
    return toy;
  } catch (error) {
    console.log("🚀 ~ getToysById ~ error:", error);
  }
};
