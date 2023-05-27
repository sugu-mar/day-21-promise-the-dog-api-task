const apiLink = 'https://api.thedogapi.com/v1/images/search?size=full';

function fetchRandomDog() {
  fetch(apiLink)
    .then(response => response.json())
    .then(data => {

      const dogContainer = document.getElementById('dog');
      const dogImage = document.createElement('img');
      const dogId =document.createElement('p');
      dogId.innerText = `Id: ${data[0].id}`;
      dogId.className = "dog-id"
      dogImage.src = data[0].url;
      dogImage.className = "img-fluid img-thumbnail"
      dogImage.alt = 'Random Dog';
      dogContainer.innerHTML = '';
      dogContainer.append(dogId,dogImage);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.random-dog');

    button.addEventListener('click', fetchRandomDog);
  

  fetchRandomDog();
});
