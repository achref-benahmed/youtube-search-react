import React, {Component} from 'react';
import ReactDom from 'react-dom';
import SearchBar from  "./comp/search_bar" ;
import YTSearch from "youtube-api-search";
import VideoList from "./comp/video_list";
import VideoDetail from "./comp/video_detail";


const API_Key = "AIzaSyARm7A9E6PKVRrw399o7DFLqldKfTZAaR0";


// Make a new Component
class App extends Component {
  constructor (props){
    super (props);
    this.state = {videos : [] };
    YTSearch ({key : API_Key, term: "I love Tunisia"},  (videos)=>{
      this.setState({videos});
    //ES6 Syntax The same as  this.setState({videos : videos});
    // Only works when the key and the property have the same name
    });
  }
render (){
  return (

     <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]}/>
        <VideoList videos = {this.state.videos}/>
     </div>

   );
 }
}


// Show HTML component on the page
ReactDom.render(<App />, document.querySelector ('.container'));
