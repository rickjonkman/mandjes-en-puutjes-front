
import {useFieldArray, useForm} from "react-hook-form";
import FormBasicInfo from "./FormBasicInfo.jsx";
import FormTags from "./FormTags.jsx";
import FormIngredients from "./FormIngredients.jsx";
import FormInstructions from "./FormInstructions.jsx";
import {DevTool} from "@hookform/devtools";
import {recipeModel} from "../../../../models/recipeModel.js";

const NewRecipeForm = () => {

    const {
        register,
        handleSubmit,
        formState: {errors},
        control,
    } = useForm({
        defaultValues: recipeModel
    });

    const {
        fields: tagFields,
        append: tagAppend,
        remove: tagRemove
    } = useFieldArray({
        name: 'tags', control
    })

    const handleAddTag = () => {
        tagAppend({tagName: ''});
    }

    const handleRemoveTag = (index) => {
        tagRemove(index);
    }

    const {
        fields: supplyFields,
        append: supplyAppend,
        remove: supplyRemove,
    } = useFieldArray({
        name: 'supplies', control
    });

    const handleAddSupply = () => {
        supplyAppend({supplyName: ''});
    }

    const handleRemoveSupply = (index) => {
        supplyRemove(index);
    }

    const {
        fields: ingredientFields,
        append: ingredientAppend,
        remove: ingredientRemove,
    } = useFieldArray({
        name: 'ingredients', control
    })

    const handleAddIngredient = () => {
        ingredientAppend({ingredientName: ''})
    }

    const handleRemoveIngredient = (index) => {
        ingredientRemove(index);
    }

    const {
        fields: instructionFields,
        append: instructionAppend,
        remove: instructionRemove,
    } = useFieldArray({
        name: 'instructions', control
    })

    const handleAddInstruction = () => {
        instructionAppend({instruction: ''})
    }

    const handleRemoveInstruction = (index) => {
        instructionRemove(index);
    }

    const handleFormSubmit = (data) => {
        console.log(data);
    }

    return (
        <>
            <form className="new-recipe__form" onSubmit={handleSubmit(handleFormSubmit)}>

                <FormBasicInfo
                    register={register}
                    control={control}
                    errors={errors}
                />

                <FormTags
                    register={register}
                    control={control}
                    errors={errors}
                    tagFields={tagFields}
                    supplyFields={supplyFields}
                    onAddSupply={handleAddSupply}
                    onRemoveSupply={handleRemoveSupply}
                    onAddTag={handleAddTag}
                    onRemoveTag={handleRemoveTag}
                />

                <FormIngredients
                    register={register}
                    control={control}
                    errors={errors}
                    ingredientFields={ingredientFields}
                    onAddIngredient={handleAddIngredient}
                    onRemoveIngredient={handleRemoveIngredient}
                />

                <FormInstructions
                    register={register}
                    control={control}
                    errors={errors}
                    instructionFields={instructionFields}
                    onRemoveInstruction={handleRemoveInstruction}
                    onAddInstruction={handleAddInstruction}
                />

            </form>

            <DevTool control={control}/>
        </>

    );
};

export default NewRecipeForm;