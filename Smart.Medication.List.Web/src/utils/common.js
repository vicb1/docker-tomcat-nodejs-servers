/* eslint no-mixed-operators: 0 */

/**
 * products generator for stories
 *
 * @param {Number} quantity - quantity of products
 * @param {Function} callback - callback func which is similiar to 'mapFunction'
 * aims to customize product format
 *
 * @return {Array} - products array
 */

function randomIntFromInterval(min,max) // min and max included
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

export const medicationsGenerator = (quantity = 5, callback) => {
  if (callback) return Array.from({ length: quantity }, callback);

  return (
    Array.from({ length: quantity }, (value, index) => ({
      id: index,
      item: `Item name ${index}`,
      breakfast: randomIntFromInterval(0, 2), // number of dosages
      lunch: randomIntFromInterval(0, 2), // number of dosages
      dinner: randomIntFromInterval(0, 2), // number of dosages
      bedtime: randomIntFromInterval(0, 2), // number of dosages
      medication_type: randomIntFromInterval(0, 1) // an integer in JavaScript, but really an enum - drives the icon in the grid
    }))
  );
};

export const productsGenerator = (quantity = 5, callback) => {
  if (callback) return Array.from({ length: quantity }, callback);

  // if no given callback, return default product format.
  return (
    Array.from({ length: quantity }, (value, index) => ({
      id: index,
      name: `Item name ${index}`,
      price: 2100 + index
    }))
  );
};

export const productsQualityGenerator = (quantity = 5) =>
  Array.from({ length: quantity }, (value, index) => ({
    id: index,
    name: `Item name ${index}`,
    quality: index % 3
  }));

const jobType = ['A', 'B', 'C', 'D', 'E'];

const jobOwner = ['Allen', 'Bob', 'Cindy'];

export const jobsGenerator = (quantity = 5) =>
  Array.from({ length: quantity }, (value, index) => ({
    id: index,
    name: `Job name ${index}`,
    owner: jobOwner[Math.floor((Math.random() * 2) + 1)],
    type: jobType[Math.floor((Math.random() * 4) + 1)]
  }));

export const jobsGenerator1 = (quantity = 5) =>
  Array.from({ length: quantity }, (value, index) => ({
    id: index,
    name: `Job name ${index}`,
    owner: Math.floor((Math.random() * 2) + 1),
    type: Math.floor((Math.random() * 4) + 1)
  }));

export const todosGenerator = (quantity = 5) =>
  Array.from({ length: quantity }, (value, index) => ({
    id: index,
    todo: `Todo item ${index}`,
    done: Math.random() > 0.4 ? 'Y' : 'N'
  }));

const startDate = new Date(2017, 0, 1);
const endDate = new Date();

export const stockGenerator = (quantity = 5) =>
  Array.from({ length: quantity }, (value, index) => ({
    id: index,
    name: `Todo item ${index}`,
    inStockDate:
      new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()))
  }));

export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export const productsExpandRowsGenerator = (quantity = 5, callback) => {
  if (callback) return Array.from({ length: quantity }, callback);

  // if no given callback, return default product format.
  return (
    Array.from({ length: quantity }, (value, index) => ({
      id: index,
      name: `Item name ${index}`,
      price: 2100 + index,
      expand: productsQualityGenerator(index)
    }))
  );
};