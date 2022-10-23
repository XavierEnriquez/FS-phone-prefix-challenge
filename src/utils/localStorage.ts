export const getLocalStorage = () => {
  const data = localStorage.getItem('userLocation');

  if (!data) return;

  return JSON.parse(data);
};

export const getSessionStorage = () => {
  const data = sessionStorage.getItem('userSelectedLocation');

  if (!data) return;

  return JSON.parse(data);
};

//   newItem.addEventListener('click', () => {
//     if (newItem.classList.contains('w--current')) {
//       newItem.classList.remove(`w--current`);
//     }
//     newItem.classList.add(`w--current`);
//     return;
//   });
