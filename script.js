




function readMoreLess() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
     } else 
  {
    dots.style.display = "none";
   
    
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";


}
}
readMoreLess();










function addTagsAutoComplete(){
    let tokenAutocomplete = new TokenAutocomplete({
        name: 'sample',
        selector: '#sample',
        noMatchesText: 'No matching results...',
        initialTokens: [
            {value: 'apple', text: 'Apple'},
            {value: 'banana', text: 'Banana'},
            {value: 'pancake', text: 'Pancake'}
        ],
        initialSuggestions: [
            {value: 'apple', text: 'Apple', description: 'Fruit'},
            {value: 'banana', text: 'Banana', description: 'Fruit'},
            {value: 'donut', text: 'Donut', description: 'Sweet'},
            {value: 'pizza', text: 'Pizza', description: 'Cheesy'},
            {value: 'burger', text: 'Burger', description: 'Meaty'},
            {value: 'pancake', text: 'Pancake', description: 'Sweet'}
        ]
    });
    tokenAutocomplete.debug(true);
  
    let tokenAutocomplete2 = new TokenAutocomplete({
        name: 'sample2',
        selector: '#sample2',
        noMatchesText: 'No matching results...'
    });
    tokenAutocomplete2.debug(true);
  
    let tokenAutocomplete3 = new TokenAutocomplete({
        name: 'sample3',
        selector: '#sample3',
        noMatchesText: 'No matching results...',
        suggestionsUri: 'https://www.mocky.io/v2/5e9773c83000008b00b6deac'
    });
    tokenAutocomplete3.debug(true);
  
    let tokenAutocomplete4 = new TokenAutocomplete({
        name: 'sample4',
        selector: '#sample4',
        noMatchesText: 'No matching results...',
        initialTokens: [
            {value: 'apple', text: 'Apple'},
            {value: 'banana', text: 'Banana'},
            {value: 'pancake', text: 'Pancake'}
        ],
        initialSuggestions: [
            {value: 'apple', text: 'Apple', description: 'Fruit'},
            {value: 'banana', text: 'Banana', description: 'Fruit'},
            {value: 'donut', text: 'Donut', description: 'Sweet'},
            {value: 'pizza', text: 'Pizza', description: 'Cheesy'},
            {value: 'burger', text: 'Burger', description: 'Meaty'},
            {value: 'pancake', text: 'Pancake', description: 'Sweet'}
        ],
        suggestionRenderer: function (suggestion) {
            var option = document.createElement('li');
  
            var text = document.createElement('strong');
            text.textContent = suggestion.text;
            option.appendChild(text);
  
            if (suggestion.description) {
                var description = document.createElement('span');
                description.textContent = ' (' + suggestion.description + ')';
                option.appendChild(description);
            }
  
            return option;
        }
    });
    tokenAutocomplete4.debug(true);
  }

  addTagsAutoComplete();
 



