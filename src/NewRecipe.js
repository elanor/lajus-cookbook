import recipes from "./mock/recipes-list.js";
import React, {useState} from "react";

function NewRecipe({ addRecipe }) {
    const [formData, setFormData] = useState({
        name: '',
        image: '',
        description: '',
        servings: '',
        preptime: '',
        cookingTime: '',
        ingredients_desc: [],
        instructions_desc: [],
        tips: []
        });

        const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        };

        const handleArrayChange = (e, key) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: { ...prev[name], [key]: value.split(',') }
        }));
        };

        const handleSubmit = (e) => {
        e.preventDefault();
        addRecipe(formData);
        setFormData({ name: '', image: '', description: '', servings: '', preptime: '', cookingTime: '', ingredients_desc: [], instructions_desc: [], tips: [] });
        };

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Recipe Name" />
            <input type="text" name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" />
            <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
            <input type="text" name="servings" value={formData.servings} onChange={handleChange} placeholder="Servings" />
            <input type="text" name="preptime" value={formData.preptime} onChange={handleChange} placeholder="Preparation Time" />
            <input type="text" name="cookingTime" value={formData.cookingTime} onChange={handleChange} placeholder="Cooking Time" />
            <textarea name="ingredients_desc" value={formData.ingredients_desc.join(', ')} onChange={(e) => handleArrayChange(e, 'ingredients_desc')} placeholder="Ingredients (comma separated)" />
            <textarea name="instructions_desc" value={formData.instructions_desc.join(', ')} onChange={(e) => handleArrayChange(e, 'instructions_desc')} placeholder="Instructions (comma separated)" />
            <textarea name="tips" value={formData.tips.join(', ')} onChange={(e) => handleArrayChange(e, 'tips')} placeholder="Tips (comma separated)" />
            <button type="submit">Add Recipe</button>
        </form>
    )

}
export default NewRecipe;