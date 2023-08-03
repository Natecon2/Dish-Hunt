var searchBarEl = document.querySelector('#search-bar');
var searchField = document.querySelector('#search-input')

async function SearchFormSubmit(event) {
  event.preventDefault();

  var search = searchField.value;

  try {
    const nutrition = await fetch('https://trackapi.nutritionix.com/v2/natural/nutrients', {
    method: 'POST',
    headers: {
      'x-app-id': 'b7f01126',
      'x-app-key': '492cdb3fd8476c9c5c4346fe408ddc99',
      'x-remote-user-id': 0,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({"query": search})
  });
  
  if (nutrition.ok) {
      // If successful, redirect the browser to the profile page
      // document.location.replace('/profile');
      const nutritionData = await nutrition.json();
      console.log(nutritionData);
    } else {
      console.log(nutrition);
    }
  } catch (error) {
    console.log(error);
  }
  
  }


searchBarEl.addEventListener('submit', SearchFormSubmit);