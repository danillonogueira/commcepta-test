// Changes .jpg extension into .png
export const changeExtension = function(name) {
  return `${name.slice(0, name.length - 4)}.png`;
};