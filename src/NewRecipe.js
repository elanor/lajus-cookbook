import recipes from "./mock/recipes-list.js";
import React, {useState} from "react";
import './index.css';

function NewRecipe({ addRecipe }) {

    const defaultImage = "https://mdn.github.io/dom-examples/popover-api/blur-background/tile.png";

    const [formData, setFormData] = useState({
        name: '',
        image: defaultImage,
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

        const handleListChange = (name, value) => {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        };
    
        const addItemToList = (name, item) => {
            if (!item.trim()) return; // Prevent adding empty items
            const list = [...formData[name], item];
            setFormData(prev => ({ ...prev, [name]: list }));
        };
    
        const removeItemFromList = (name, index) => {
            const list = [...formData[name]];
            list.splice(index, 1);
            handleListChange(name, list);
        };
    
        const handleKeyDown = (e, name) => {
            if (e.key === 'Enter') {
                e.preventDefault(); // Prevent form submission on Enter
                addItemToList(name, e.target.value);
                e.target.value = ''; // Clear input after adding to list
            }
        };

        const handleFileChange = (e) => {
            const file = e.target.files[0];  // Get the first file
            if (file) {
                setFormData(prev => ({ ...prev, imageFile: file }));
            }
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            if (typeof addRecipe === 'function') {
                addRecipe(formData);
            } else {
                console.error('addRecipe is not a function*****');
            }
        };

    return(
        <div className="new-recipe-form p-6 bg-white shadow-md rounded-lg flex justify-end flex-col self-end">
        
        <button className="new-recipe-form__close close-btn"
                popovertarget="opennewrecipe"
                popovertargetaction="hide">
            <span className="text-2xl">&times;</span>
            <span className="sr-only">Close</span>

        </button>

        <div className="flex p-6">
            <form className="new-recipe-form__content space-y-4" onSubmit={handleSubmit}>

                <div className="flex flex-col items-center justify-end">
                    <img src={formData.image} alt="Recipe" className="mb-4 w-full bg-contain h-32 object-cover rounded" />
                    <input
                        type="text"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        placeholder="Or enter an Image URL"
                        className="mb-2 px-4 py-2 border rounded w-full"
                    />
                    <input
                        type="file"
                        onChange={handleFileChange}
                        className="file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 w-full"
                    />
                </div>

                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Recipe Name" className="w-full px-4 py-2 border rounded"/>
                

                <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="w-full px-4 py-2 border rounded"/>
                <div className="grid gap-2 grid-cols-3">
                    <input type="text" name="servings" value={formData.servings} onChange={handleChange} placeholder="Servings" className="w-full px-4 py-2 border rounded"/>
                    <select name="preptime" value={formData.preptime} onChange={handleChange} className="w-full pl-4 pr-6 py-2 border rounded">
                        <option value="5 min">5 min</option>
                        <option value="10 min">10 min</option>
                        <option value="15 min">15 min</option>
                        <option value="30 min">30 min</option>
                        <option value="45 min">45 min</option>
                        <option value="1 hour">1 hour</option>
                        <option value="1.5 hours">1.5 hours</option>
                        <option value="2 hours">2 hours</option>
                        <option value="more than 2 hours">more than 2 hours</option>
                    </select>
                    <input type="text" name="cookingTime" value={formData.cookingTime} onChange={handleChange} placeholder="Cooking Time" className="w-full px-4 py-2 border rounded"/>
                </div>
                {/* <textarea name="ingredients_desc" value={formData.ingredients_desc.join(', ')} onChange={(e) => handleArrayChange(e, 'ingredients_desc')} placeholder="Ingredients (comma separated)" />
                <textarea name="instructions_desc" value={formData.instructions_desc.join(', ')} onChange={(e) => handleArrayChange(e, 'instructions_desc')} placeholder="Instructions (comma separated)" />
                <textarea name="tips" value={formData.tips.join(', ')} onChange={(e) => handleArrayChange(e, 'tips')} placeholder="Tips (comma separated)" /> */}

                {['ingredients_desc', 'instructions_desc', 'tips'].map(listName => (
                     <div key={listName}>
                     <h3 className="font-bold text-lg">{listName.split('_')[0].charAt(0).toUpperCase() + listName.split('_')[0].slice(1)}</h3>
                     <ol className="list-decimal list-inside">
                         {formData[listName].map((item, index) => (
                             <li key={index} className="flex justify-between items-center">
                                 {item}
                                 <button onClick={() => removeItemFromList(listName, index)} className="ml-4 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700">Remove</button>
                             </li>
                         ))}
                     </ol>
                     <input
                         type="text"
                         onKeyDown={(e) => handleKeyDown(e, listName)}
                         placeholder={`Add new ${listName.replace('_', ' ')}`}
                         className="mt-2 px-4 py-2 border rounded w-full"
                     />
                 </div>
                ))}

                <button type="submit" className="button button__primary">Add Recipe</button>
            </form>
        </div>
        
        </div>
        
    )

}
export default NewRecipe;