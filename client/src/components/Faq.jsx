import React from 'react';
import axios from 'axios';
import Features from './Features.jsx';

class Faq extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      data: '',
      topFeatures: []
    }
  }

  componentDidMount () {
    let path = window.location.pathname.slice(9);
    axios.get(path)
      .then((results) => {
        let topFiveFeatures = [];
        for (let i = 0; i < 5; i++) {
          topFiveFeatures.push(results.data[i].features);
        }
        this.setState({data: results.data, topFeatures: topFiveFeatures}, () => {
        });
      })
  }

  render () {
    console.log(this.state);
    return (
      <div>
        <Features features={this.state.topFeatures} />
      </div>
    )
  }
}

export default Faq;