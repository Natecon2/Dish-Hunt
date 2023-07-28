//fetch data from nurtitionix api
// const recipe = await fetch('https://trackapi.nutritionix.com/search/instant?query=grilled cheese', {
//     method: 'GET',
//     headers: {
//         'x-app-id': 'b7f01126',
//         'x-app-key': '492cdb3fd8476c9c5c4346fe408ddc99	',
//         'x-remote-user-id': 0
//     }
// })


const nutritionLabel = async () => {
const ingredients = document.querySelector('#ingredients').value.trim();
if(ingredients) {
const nutrition = await fetch('https://trackapi.nutritionix.com/v2/natural/nutrients', {
    method: 'POST',
    headers: {
        'x-app-id': 'b7f01126',
        'x-app-key': '492cdb3fd8476c9c5c4346fe408ddc99	',
        'x-remote-user-id': 0
    },
    body: JSON.stringify({ ingredients }),
});
if (nutrition.ok) {
    // If successful, redirect the browser to the profile page
    document.location.replace('/profile');
  } else {
    alert(nutrition.statusText);
  }
}
};