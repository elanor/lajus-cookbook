const recipes = [
    {
        id: 1,
        name: "Brazilian Feijoada",
        image: "brazilan-feijoada-image.png",
        description: "Dinner by Sergio, for that special autumn sunny day",
        servings: "4 people",
        preptime: "20 min",
        cookingTime: "2 to 3h",
        ingredients_desc: [
            "500g of black beans, soaked overnight",
            "200g of pork shoulder cut into chunks",
            "100g of chorizo, sliced"
        ],
        instructions_desc: [
            "Soak the Beans: Soak the black beans in a large bowl of water overnight. This will help them cook faster and more evenly.",
            "Cook the Meats: In a large pot, heat the oil over medium heat. Add the bacon and cook until it starts to crisp. Then add the pork shoulder and chorizo. Cook until they start to brown.",
            "Sauté the Vegetables: Add the chopped onions and minced garlic to the pot with the meats. Cook until the onions are soft and translucent.",
            "Add the Beans: Drain the beans and add them to the pot. Add enough water to cover all the ingredients. Throw in the bay leaves, and season with salt and pepper to taste.",
            "Simmer: Bring the mixture to a boil, then reduce the heat to low. Cover the pot and let it simmer for about 2-3 hours, or until the beans are tender and the meat is cooked through. Check occasionally, adding more water if necessary to keep the beans from drying out.",
            "Final Adjustments: Once the beans and meat are fully cooked, adjust the seasoning with more salt and pepper as needed. If you find the feijoada too liquid, you can remove some of the beans and mash them before stirring them back into the pot. This will help thicken the stew.",
            "Serve: Serve the feijoada hot, accompanied by white rice, orange slices, sautéed collard greens, and farofa, if desired. These sides complement the rich flavours of the feijoada and make for a traditional Brazilian meal.",
        ],
        tips: ["Adjust the types and amounts of meats according to your preference. Traditional recipes can include other parts of the pork, such as ribs, feet, and ears, as well as beef cuts.",
        "Cooking times may vary depending on the type and age of the beans. Keep an eye on the pot and adjust as necessary.",
        "Letting the feijoada rest for a while after cooking can enhance its flavours, making it even better when reheated."
        ]
    },
    {
        id: 2,
        name: "Classic Margherita Pizza",
        image: 'brazilan-feijoada-image.png',
        description: "Simple yet classic pizza with a delightful blend of fresh mozzarella and basil.",
        servings: "2-3 people",
        preptime: "15 min",
        cookingTime: "10 min",
        ingredients_desc: [
            "1 pizza dough",
            "100g fresh mozzarella",
            "Handful of fresh basil leaves",
            "200ml tomato sauce",
            "2 tbsp olive oil",
            "Salt and pepper to taste"
        ],
        instructions_desc: ["Roll out the dough to your desired thickness. Spread tomato sauce evenly, leaving a small border. Distribute slices of mozzarella and basil. Drizzle with olive oil and season. Bake in a preheated oven at 500°F (260°C) for about 10 minutes or until crust is golden and cheese bubbles."],
        tips: ["For best results, use a pizza stone and preheat your oven with the stone inside.", ""]
    },
    {
        id: 3,
        name: "Thai Green Curry Chicken",
        image: 'brazilan-feijoada-image.png',
        description: "Aromatic and spicy, this Thai curry is made with homemade green curry paste and creamy coconut milk.",
        servings: "4 people",
        preptime: "20 min",
        cookingTime: "30 min",
        ingredients_desc: [
            "400g chicken breast, sliced",
            "400ml coconut milk",
            "2 tbsp green curry paste",
            "1 bunch Thai basil",
            "1 red bell pepper, sliced",
            "1 zucchini, sliced",
            "1 tbsp fish sauce",
            "1 tsp sugar"
        ],
        instructions_desc: ["In a pan, sauté the green curry paste until aromatic.", 
        "Add chicken and vegetables, and cook for a few minutes.",
        "Pour in coconut milk, then simmer until everything is cooked through.",
        "Finish with fish sauce, sugar, and basil."],
        tips: ["Serve with steamed jasmine rice to balance the flavors."]
    },
    {
        id: 4,
        name: "Vegan Quinoa Salad",
        image: 'brazilan-feijoada-image.png',
        description: "A hearty and healthy salad packed with colorful vegetables and a tangy vinaigrette.",
        servings: "4 people",
        preptime: "10 min",
        cookingTime: "15 min",
        ingredients_desc: [
            "1 cup quinoa",
            "1 cucumber, diced",
            "1 bell pepper, diced",
            "1/2 red onion, finely chopped",
            "1/4 cup chopped parsley",
            "1/4 cup lemon juice",
            "1/4 cup olive oil",
            "Salt and pepper to taste"
        ],
        instructions_desc: ["Cook quinoa according to package instructions and let it cool. Combine with vegetables in a large bowl. Whisk together lemon juice, olive oil, salt, and pepper. Pour over the salad and toss to coat."],
        tips: ["Add avocados or nuts for extra texture and flavor."]
    },
    {
        id: 5,
        name: "French Onion Soup",
        image: 'brazilan-feijoada-image.png',
        description: "A rich and comforting soup topped with melted Gruyère cheese and crusty bread.",
        servings: "4 people",
        preptime: "10 min",
        cookingTime: "1 hour",
        ingredients_desc: [
            "5 large onions, thinly sliced",
            "2 cloves garlic, minced",
            "4 cups beef broth",
            "1/2 cup white wine",
            "1 bay leaf",
            "Thyme sprigs",
            "4 slices of crusty bread",
            "100g Gruyère cheese, grated",
            "2 tbsp butter",
            "Salt and pepper to taste"
        ],
        instructions_desc: [
            "In a large pot, melt butter over medium heat.", 
            "Add onions and cook until caramelized.",
            "Add garlic, then deglaze with white wine.",
            "Add broth, bay leaf, and thyme.",
            "Simmer for about 40 minutes.",
            "Serve in bowls, topped with bread and cheese, then broil until cheese is bubbly and golden."
        ],
        tips: ["For a vegetarian version, substitute beef broth with a robust vegetable broth."]
    },
    {
        id: 1,
        name: "Brazilian Feijoada",
        image: 'brazilan-feijoada-image.png',
        description: "Dinner by Sergio, for that special autumn sunny day",
        servings: "4 people",
        preptime: "20 min",
        cookingTime: "2 to 3h",
        ingredients_desc: [
            "500g of black beans, soaked overnight",
            "200g of pork shoulder cut into chunks",
            "100g of chorizo, sliced"
        ],
        instructions_desc: ["Soak the Beans: Soak the black beans in a large bowl of water overnight. This will help them cook faster and more evenly."],
        tips: [""]
    },
    {
        id: 2,
        name: "Classic Margherita Pizza",
        image: 'brazilan-feijoada-image.png',
        description: "Simple yet classic pizza with a delightful blend of fresh mozzarella and basil.",
        servings: "2-3 people",
        preptime: "15 min",
        cookingTime: "10 min",
        ingredients_desc: [
            "1 pizza dough",
            "100g fresh mozzarella",
            "Handful of fresh basil leaves",
            "200ml tomato sauce",
            "2 tbsp olive oil",
            "Salt and pepper to taste"
        ],
        instructions_desc: ["Roll out the dough to your desired thickness. Spread tomato sauce evenly, leaving a small border. Distribute slices of mozzarella and basil. Drizzle with olive oil and season. Bake in a preheated oven at 500°F (260°C) for about 10 minutes or until crust is golden and cheese bubbles."],
        tips: ["For best results, use a pizza stone and preheat your oven with the stone inside."]
    },
    {
        id: 3,
        name: "Thai Green Curry Chicken",
        image: 'brazilan-feijoada-image.png',
        description: "Aromatic and spicy, this Thai curry is made with homemade green curry paste and creamy coconut milk.",
        servings: "4 people",
        preptime: "20 min",
        cookingTime: "30 min",
        ingredients_desc: [
            "400g chicken breast, sliced",
            "400ml coconut milk",
            "2 tbsp green curry paste",
            "1 bunch Thai basil",
            "1 red bell pepper, sliced",
            "1 zucchini, sliced",
            "1 tbsp fish sauce",
            "1 tsp sugar"
        ],
        instructions_desc: ["In a pan, sauté the green curry paste until aromatic.", 
        "Add chicken and vegetables, and cook for a few minutes.",
        "Pour in coconut milk, then simmer until everything is cooked through.",
        "Finish with fish sauce, sugar, and basil."],
        tips: ["Serve with steamed jasmine rice to balance the flavors."]
    },
    {
        id: 4,
        name: "Vegan Quinoa Salad",
        image: 'brazilan-feijoada-image.png',
        description: "A hearty and healthy salad packed with colorful vegetables and a tangy vinaigrette.",
        servings: "4 people",
        preptime: "10 min",
        cookingTime: "15 min",
        ingredients_desc: [
            "1 cup quinoa",
            "1 cucumber, diced",
            "1 bell pepper, diced",
            "1/2 red onion, finely chopped",
            "1/4 cup chopped parsley",
            "1/4 cup lemon juice",
            "1/4 cup olive oil",
            "Salt and pepper to taste"
        ],
        instructions_desc: ["Cook quinoa according to package instructions and let it cool. Combine with vegetables in a large bowl. Whisk together lemon juice, olive oil, salt, and pepper. Pour over the salad and toss to coat."],
        tips: ["Add avocados or nuts for extra texture and flavor."]
    },
    {
        id: 5,
        name: "French Onion Soup",
        image: 'brazilan-feijoada-image.png',
        description: "A rich and comforting soup topped with melted Gruyère cheese and crusty bread.",
        servings: "4 people",
        preptime: "10 min",
        cookingTime: "1 hour",
        ingredients_desc: [
            "5 large onions, thinly sliced",
            "2 cloves garlic, minced",
            "4 cups beef broth",
            "1/2 cup white wine",
            "1 bay leaf",
            "Thyme sprigs",
            "4 slices of crusty bread",
            "100g Gruyère cheese, grated",
            "2 tbsp butter",
            "Salt and pepper to taste"
        ],
        instructions_desc: [
            "In a large pot, melt butter over medium heat.", 
            "Add onions and cook until caramelized.",
            "Add garlic, then deglaze with white wine.",
            "Add broth, bay leaf, and thyme.",
            "Simmer for about 40 minutes.",
            "Serve in bowls, topped with bread and cheese, then broil until cheese is bubbly and golden."
        ],
        tips: ["For a vegetarian version, substitute beef broth with a robust vegetable broth."]
    }
];

export default recipes;