import React, { Component } from 'react';
import request from 'superagent'
import {uploadFile} from '../services/svc-filestack.js'

class FileUploader extends Component {
  state = {
    fileImgData : 'https://via.placeholder.com/250x150',
    theFile: null
  }

  _handleSubmit(evt){
    evt.preventDefault()
    const formEl = evt.target
    uploadFile(this.state.theFile)
      .then((filestackRes)=>{
        console.log('\nfilestack RES:');
        console.log(filestackRes);

        const jsonBody = {
          item_name: formEl.item.value,
          price: parseInt(formEl.price.value),
          image_link: filestackRes.url
        }
        console.log('\ndata for OUR server');
        console.log(jsonBody);

        request
          .post('/api/pets')
          .json(jsonBody)

      })
    // (1) Upload file to storage service (filestack)
    // (2) Send new record information to api (w/ POST request)
  }

  _handleImgFileUpdate(e){
    e.preventDefault()
    const files = e.target.files
    const theFileInstance = files.item(0)
    console.log(theFileInstance);

    const fileReader = new FileReader()
    fileReader.readAsDataURL(theFileInstance)
    fileReader.addEventListener('load', (fileBlob)=>{
      console.log(fileBlob);
      this.setState({
        fileImgData : fileBlob.originalTarget.result ,
        theFile : theFileInstance
      })
    })
  }

  render() {
    return (
      <div className="App">
        <form className="form-col"
          onSubmit={ (evt)=>{ this._handleSubmit(evt) } }
         >
         <h2>Save New Pet</h2>

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
          <span className="file-btn-wrapper">
            Select Image
            <input
              onChange={ (evt)=>{ this._handleImgFileUpdate(evt) }  }
              type="file"
              className="add-file-img-btn"
              name="img"/>
          </span>

          <input type="submit" value="Submit"/>
          </div>

        </form>

        <div className="img-col">
          <h3>Image Display</h3>
          <img src={this.state.fileImgData}/>
        </div>

      </div>
    );
  }
}

export default FileUploader;
