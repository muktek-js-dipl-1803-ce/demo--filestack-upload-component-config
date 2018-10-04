import React, { Component } from 'react';
import './App.css';
import request from 'superagent'
import {uploadFile} from '../services/filestackService.js'

class FileUploader extends Component {
  state = {
    fileImg : 'https://via.placeholder.com/250x150',
    theFile: null
  }


  _handleSubmit(evt){
    evt.preventDefault();
    uploadFile(this.state.theFile)
      .then( serviceRes =>{
        console.log('file from filestack??');
        console.log(serviceRes);

        // request.post('/api/products')

      })
  }

  _handleImgFileUpdate(evt){
    const files = evt.target.files;
    const file = files.item(0);
    console.log(file);
    let fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.addEventListener('load', (f)=>{
      // console.log(f.originalTarget.result);
      this.setState({
        fileImg : f.originalTarget.result,
        theFile: file
      })
    })
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={(e)=> this._handleSubmit(e) } className="form-col" >
         <h2>Upload</h2>

          <div>
            <label>Item</label>
            <input type="text" name="item"/>
          </div>
          <div>
          <label>Price</label>
          <input type="text" name="price"/>
          </div>

          <div>
          <label>Add Image</label>
          <span>
            xxxx
            <input
              onChange={ (e)=>{ this._handleImgFileUpdate(e) } }
              type="file"
              name="img" style={{opacity: .2, top: 0, left: 0, width: '100%', height: '100%', position: 'absolute', zIndex: 2}}/>
          </span>

          <input type="submit" value="Submit"/>
          </div>

        </form>

        <div className="img-col">
          <h3>Image Display</h3>
          <img src={this.state.fileImg}/>
        </div>


      </div>
    );
  }
}

export default FileUploader;
