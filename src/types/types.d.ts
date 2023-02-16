
export interface Recipe {
    id: number;
    name: string;
    description: string;
    image?: string;
    ingredients: RecipeIngredient[];
    steps: Step[];
    type: {
        main: RecipeType;
        sub?: MainTypes | SupplementTypes | StartersType | SoupTypes;
    };
    duration: number; //  minutes
    difficulty: number; // 1-5
    servings: number;
}

export interface RecipeIngredient {
    id: number;
    name: string;
    quantity: number;
    unit: Unit;
}

export enum Unit {
    Milliliter = "Milliliter",
    Liter = "Liter",
    Deciliter = "Deciliter",
    Centiliter = "Centiliter",
    Milligram = "Milligram",
    Gram = "Gram",
    Kilogram = "Kilogram",
    Cup = "Cup",
    Bunch = "Bunch",
    Drop = "Drop",
    Dash = "Dash",
    Teaspoon = "Teaspoon",
    Tablespoon = "Tablespoon",
    Pinch = "Pinch",
    Piece = "Piece",
}




export interface Step {
    num: number;
    description: string;
}

export enum RecipeType {
    Dessert = "Dessert",
    Supplement = "Supplement",
    Breakfast = "Breakfast",
    Main = "Main",
    Salad = "Salad",
    Soup = "Soup",
    Starters = "Starters",
}

export enum MainTypes {
    Fish = "Fish",
    Vegetarian = "Vegetarian",
    Fowl = "Fowl",
    Pork = "Pork",
    Pasta = "Pasta",
    Beef = "Beef",
    Venison = "Venison"
}

export enum SupplementTypes {
    Vegetables = "Vegetables",
    Potatoes = "Potatoes",
    Noodles = "Noodles",
    Rice = "Rice",
    Sauce = "Sauce"
}

export enum StartersType {
    Cold = "Cold",
    Warm = "Warm"
}

export enum SoupTypes {
    Clear = "Clear",
    Thickened = "Thickened",
    AddIn = "AddIn"
}
