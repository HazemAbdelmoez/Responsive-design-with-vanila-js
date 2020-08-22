
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { WithContext as ReactTags } from 'react-tag-input';
 
// const KeyCodes = {
//   comma: 188,
//   enter: 13,
// };
 
// const delimiters = [KeyCodes.comma, KeyCodes.enter];
 
// class App extends React.Component {
//     constructor(props) {
//         super(props);
 
//         this.state = {
//             tags: [
//                 { id: "Thailand", text: "Thailand" },
//                 { id: "India", text: "India" }
//              ],
//             suggestions: [
//                 { id: 'USA', text: 'USA' },
//                 { id: 'Germany', text: 'Germany' },
//                 { id: 'Austria', text: 'Austria' },
//                 { id: 'Costa Rica', text: 'Costa Rica' },
//                 { id: 'Sri Lanka', text: 'Sri Lanka' },
//                 { id: 'Thailand', text: 'Thailand' }
//              ]
//         };
//         this.handleDelete = this.handleDelete.bind(this);
//         this.handleAddition = this.handleAddition.bind(this);
//         this.handleDrag = this.handleDrag.bind(this);
//     }
 
//     handleDelete(i) {
//         const { tags } = this.state;
//         this.setState({
//          tags: tags.filter((tag, index) => index !== i),
//         });
//     }
 
//     handleAddition(tag) {
//         this.setState(state => ({ tags: [...state.tags, tag] }));
//     }
 
//     handleDrag(tag, currPos, newPos) {
//         const tags = [...this.state.tags];
//         const newTags = tags.slice();
 
//         newTags.splice(currPos, 1);
//         newTags.splice(newPos, 0, tag);
 
//         // re-render
//         this.setState({ tags: newTags });
//     }
 
//     render() {
//         const { tags, suggestions } = this.state;
//         return (
//             <div>
//                 <ReactTags tags={tags}
//                     suggestions={suggestions}
//                     handleDelete={this.handleDelete}
//                     handleAddition={this.handleAddition}
//                     handleDrag={this.handleDrag}
//                     delimiters={delimiters} />
//             </div>
//         )
//     }
// };
 
// ReactDOM.render(<App />, document.getElementById('app'));





function myFunction() {
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
myFunction();










function newf(){
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

  newf();
 



