import React, {Component} from 'react'
import InputField from '../InputField/InputField'

const mykey = `${process.env.REACT_APP_API_KEY}`

class French extends Component{
    constructor(props){
        super(props)
        this.state = {String: '',
                      Answer: ''}
        
    }

    handleClick = () => {
        this.setState({ String: ''})
        let el = document.getElementById('Text')
        this.setState({ String: el.value});
      };

    
    componentDidUpdate() {
        fetch(`https://systran-systran-platform-for-language-processing-v1.p.rapidapi.com/translation/text/translate?source=en&target=fr&input=${this.state.String}`, {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": mykey,
        "x-rapidapi-host": "systran-systran-platform-for-language-processing-v1.p.rapidapi.com"
    }
    })
    .then(response => {
    return response.json();
    })
    .then((data) => {
      this.setState({
        Answer : data.outputs[0].output
      });
    })
    .catch(err => {
    console.error(err);
    });
    }

    render() {
            return (
                <div>
                <InputField />
                <button id="Translate-button" onClick={this.handleClick}>Translate</button>
                <p>{this.state.Answer}</p>
                </div>
        );
        }

        

}

export default French