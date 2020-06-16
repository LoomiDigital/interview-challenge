export const addDietaryCount = (items, dietaryCount) =>
  items.dietaries.reduce(
    (acc, dietary) => ({
      ...acc,
      [dietary]: dietaryCount[dietary] + 1 || 1,
    }),
    {}
  );

export const removeDietaryCount = (items, dietaryCount) => {
  if (!items) return {};

  return items.dietaries.reduce(
    (acc, dietary) => ({
      ...acc,
      [dietary]: dietaryCount[dietary] - 1 || 1,
    }),
    {}
  );
};

export const add = (items, id) => items.filter(item => item.id === id);

export const remove = (items, id) => items.filter(item => item.id !== id);

export const added = (items, id) => items.some(item => item.id === id);
