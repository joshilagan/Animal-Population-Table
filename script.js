// create a submit event listener to the form
const form = document.querySelector('#animal-form')
const polarbear = document.querySelector('td:nth-child(1)');
const grizzlybear = document.querySelector('td:nth-child(2)');
const teddybear = document.querySelector('td:nth-child(3)');
const webarebears = document.querySelector('td:nth-child(4)');
//create an object which will hold the bear types as keys and population as values, object name should be bearAnimals
const bearAnimals = {'POLAR BEAR': '100', 'GRIZZLY BEAR': '200', 'TEDDY BEAR': '300', 'WE BARE BEARS': '400'};
console.log(bearAnimals['WE BARE BEARS']);

function editbear(e){
  e.preventDefault();
  //inside the event listener, 
  //convert the form into new FormData object then assign it to a variable
  //use new FormData()
  const form1 = new FormData(form)
 

//the input element's name attribute value will be the key and the value of the input element will be the key's value.
//get the element's name attribute value thru get(), then assign it to a variable
// Use let for the beartype
//then console log the variable


    const newnumber = form1.get('newNumber');
    //create a switch case for beartype so that it turns into ALLCAPS
    let beartype = form1.get('bearType');
    switch (beartype) {
        case 'grizzlybear':
            beartype = 'GRIZZLY BEAR'
          break;
        case 'polarbear':
          beartype = 'POLAR BEAR'
          break;
        case 'teddybear':
          beartype = 'TEDDY BEAR'
          break;
        case 'webarebears':
          beartype = 'WE BARE BEARS'
          break;
        default:
          console.log('ERROR');
      }
//use these values to change the values inside the bearAnimals object you created earlier
//then make these values reflect on the values of the bear population in HTML

  bearAnimals[beartype] = newnumber;
  polarbear.textContent = bearAnimals['POLAR BEAR'];
  grizzlybear.textContent = bearAnimals['GRIZZLY BEAR'];
  teddybear.textContent = bearAnimals['TEDDY BEAR'];
  webarebears.textContent = bearAnimals['WE BARE BEARS'];
}
form.addEventListener('submit', editbear)