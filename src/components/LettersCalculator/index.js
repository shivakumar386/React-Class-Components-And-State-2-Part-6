// import {Component} from 'react'
// import './index.css'

// class LettersCalculator extends Component {
//   state = {searchInput: ''}

//   onChangeSearchInput = event => {
//     this.setState({searchInput: event.target.value})
//   }

//   render() {
//     const {searchInput} = this.state
//     return (
//       <div className="bg-container">
//         <div className="card-container">
//           <div>
//             <h1 className="heading">Calculate the Letters you enter</h1>
//             <div className="text-container">
//               <label className="span-element" htmlFor="phraseText">
//                 Enter the phrase
//               </label>
//               <input
//                 type="text"
//                 id="phraseText"
//                 placeholder="Enter the phrase"
//                 className="search-input"
//                 onChange={this.onChangeSearchInput}
//               />
//               <p className="button">No.of letters: {searchInput.length}</p>
//             </div>
//           </div>
//           <img
//             src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
//             alt="letters calculator"
//             className="images"
//           />
//         </div>
//       </div>
//     )
//   }
// }

// export default LettersCalculator

import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    inputPhrase: '',
  }

  onChangeInputPhrase = event => {
    const {value} = event.target

    this.setState({inputPhrase: value})
  }

  render() {
    const {inputPhrase} = this.state

    return (
      <div className="app-container">
        <div className="letters-calculator-container">
          <div className="calculator-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="input-phrase-container">
              <label className="label" htmlFor="phraseText">
                Enter the phrase
              </label>
              <input
                className="letters-input"
                id="phraseText"
                onChange={this.onChangeInputPhrase}
                placeholder="Enter the phrase"
                type="text"
                value={inputPhrase}
              />
            </div>
            <p className="letters-count">No.of letters: {inputPhrase.length}</p>
          </div>
          <img
            alt="letters calculator"
            className="letters-calculator-image"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
