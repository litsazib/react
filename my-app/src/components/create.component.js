import React, { Component } from 'react';


class Create extends Component {
  
  constructor(props){
    super(props);
    
    this.state = {
      person_name: '',
      business_name:'',
      business_gst_number:'',
    }
  }
  
    render() {
        return (
          <div style={{marginTop: 10}}>
              <h3>Add New Business</h3>
              <form>
                  <div className="form-group">
                      <label>Add Person Name:  </label>
                      <input type="text" className="form-control"/>
                  </div>
                  <div className="form-group">
                      <label>Add Business Name: </label>
                      <input type="text" className="form-control"/>
                  </div>
                  <div className="form-group">
                      <label>Add GST Number: </label>
                      <input type="text" className="form-control"/>
                  </div>
                  <div className="form-group">
                      <input type="submit" value="Register Business" className="btn btn-primary"/>
                  </div>
              </form>
          </div>
        )
    }
}

export default Create;