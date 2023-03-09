import {createSelector} from 'reselect';

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.categories
)

//Selector should retrieve data stored in the redux store and get outputed in the desired format
export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) =>  categories.reduce((acc, category) => {
        //Destructure the previously assigned title and the data of the snapshot
        const {title, items} = category;

        //for each category title assign the corresponding items as children
        acc[title.toLowerCase()] = items
        return acc;
    }, {})
);

export const selectCategoriesLoading = createSelector(
    [selectCategoryReducer], (categoriesSlice) => categoriesSlice.isLoading
)