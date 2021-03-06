import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
import ImageList from './ImageList';

class App extends React.Component {
  state =  { images: [] }

onSearchSubmit = async (term) =>{
    const response = await axios.get('https://api.unsplash.com/search/photos',{
      params:{ query:term },
      headers:{
        Authorization:'Client-ID 1038c3585bb1c8fc9b3698be83533284948a9421ed9c515d647ae0331e346f54'
      }
    });

    this.setState({ images:response.data.results })
  }

  render() {
        return (
          <div className="ui container" style={{ marginTop:'10px' }}>
            <SearchBar onSubmit= {this.onSearchSubmit}/>
            <ImageList images={this.state.images}/>
          </div>
      )
    }
}

export default App;
