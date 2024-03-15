
export const recipeModel = {
    recipeName: '',
    prepTime: {
        hour: 0,
        min: 0,
    },
    servings: 0,
    tags: [
        { tagName: '' }
    ],
    supplies: [
        { name: '' }
    ],
    ingredients: [
        {
            ingredientName: '',
            amount: '',
            unit: ''
        }
    ],
    instructions: [
        {
            step: 0,
            instruction: '',
        }
    ],
    creator: '',
};