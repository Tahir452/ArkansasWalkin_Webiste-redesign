import React from "react";
import axios from "axios";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

class EMAIL extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          rating:'',
          review: ''
        }
    }

    onNameChange(event) {
      this.setState({name: event.target.value})
    }

    onPhoneChange(event) {
      this.setState({phone: event.target.value})
    }

    onEmailChange(event) {
        this.setState({email: event.target.value})
    }

    onRatingChange(event) {
        this.setState({subject: event.target.value})
    }

    onReviewChange(event) {
        this.setState({message: event.target.value})
    }

    submitEmail(e){
      e.preventDefault();
      axios({
        method: "POST", 
        url:"/send", 
        data:  this.state
      }).then((response)=>{
        if (response.data.status === 'success'){
            alert("Message Sent."); 
            this.resetForm()
        }else if(response.data.status === 'fail'){
            alert("Message failed to send.")
        }
      })
  }

  resetForm(){
      this.setState({name: '', email: '',rating:'', review: ''})
  }

  render() {
    return (
        <div className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title">
                          <br></br>
                          <h2 className = "title" align="center" style={{color: 'black'}}>Your Feedback Is Important To Us! Leave Us A Review Below.</h2>
                           <br></br><hr style={{color: 'black'}}/>
                            <form id="contact-form" onSubmit={this.submitEmail.bind(this)} 
                                method="POST">
                                <GridContainer>
                                  <GridItem xs={12} sm={12} md={6}>
                                    <input placeholder = "Name"  id="name" type="text" 
                                    className="form-control" required value={this.state.name} 
                                    onChange={this.onNameChange.bind(this)}/>
                                    <br></br>
                                    <input placeholder = "Email"  id="email" type="email"
                                    className="form-control" aria-describedby="emailHelp"
                                    required value={this.state.email} onChange=
                                    {this.onEmailChange.bind(this)}/>
                                    <br></br>
                                    <select name="rating" placeholder = "Email" id="rating" className="form-control" required value={this.state.rating}
                                    onChange={this.onRatingChange.bind(this)}>
                                      <option>----Rating----</option>
                                      <option value="1star">1 star</option>
                                      <option value="2star">2 star</option>
                                      <option value="3star">3 star</option>
                                      <option value="4star">4 star</option>
                                      <option value="5star">5 star</option>
                                    </select>
                                    <br></br>
                                    <textarea placeholder = "Leave Us A Review"  id="review" 
                                    className="form-control" rows="5" 
                                    required value={this.state.review}
                                    onChange= {this.onReviewChange.bind(this)}/>
                                    <br></br>
                                    <Button type="submit" className="primary-btn submit">Submit</Button>
                                  </GridItem>
                                </GridContainer>                            
                            </form>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
  }
}

export default EMAIL;