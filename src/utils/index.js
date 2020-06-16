export const addDietaryCount = (items, dietaryCount) =>
  items.dietaries.reduce(
    (acc, dietary) => ({
      ...acc,
      [dietary]: dietaryCount[dietary] + 1 || 1,
    }),
    {}
  );

export const removeDietaryCount = (items, id, dietaryCount) => {
  if (!items) return {};
  let updated = { ...dietaryCount };

  items
    .filter(item => item.id === id)[0]
    .dietaries.forEach(type => {
      if (updated[type] > 1) {
        updated = { ...updated, [type]: dietaryCount[type] - 1 };
      } else {
        delete updated[type];
      }
    });

  return updated;
};

export const add = (items, id) => items.filter(item => item.id === id);

export const remove = (items, id) => items.filter(item => item.id !== id);

export const added = (items, id) => items.some(item => item.id === id);
