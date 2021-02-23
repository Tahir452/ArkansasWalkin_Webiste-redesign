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
          phone: '',
          email: '',
          subject:'',
          message: ''
        }
    }


  render() {
    return (
        <div className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title">
                          <br></br>
                          <br></br>
                          <h2 className= "title" align="center" style={{color: 'black'}}>
                            Contact Arkansas Walk-In Tub And Shower Today
                          </h2>
                          <br></br>
                          <p className= "description" align="center" style={{color: 'black'}}>
                            Thank you for visiting the website of Arkansas Walk-In Tub and Shower. 
                            We're a fully licensed and insured walk-in tub company serving Maumelle, AR and the entire state. 
                            If you're interested in having a high-quality walk-in tub or shower installed, 
                            you've come to the right place. 
                            Call 501-539-3332 today to learn more about our services.
                            </p>
                            <br></br>
                            <h6 className= "description" align="center" style={{color: 'black'}}>
                              Please Use This Form To Email Us
                            </h6>
                            <br></br><hr style={{color: 'black'}}/>
                            <form>
                                <GridContainer>
                                  <GridItem xs={12} sm={12} md={6}>
                                    <input placeholder = "Name"  id="name" type="text" 
                                    className="form-control" required value={this.state.name} 
                                    />
                                    <br></br>
                                    <input placeholder = "Phone"  id="phone" type="number" 
                                    className="form-control" required value={this.state.phone} 
                                    />
                                    <br></br>
                                    <input placeholder = "Email"  id="email" type="email"
                                    className="form-control" aria-describedby="emailHelp"
                                    required value={this.state.email} />
                                    <br></br>
                                    <input placeholder = "Subject"  id="subject" type="text"
                                    className="form-control" required value={this.state.subject}
                                    />
                                    <br></br>
                                    <textarea placeholder = "Message"  id="message" 
                                    className="form-control" rows="5" 
                                    required value={this.state.message}
                                    />
                                    <br></br>
                                    <div className="form-control" id="msg"> Message has been sent</div>
                                    <Button type="submit" className="primary-btn submit">Submit</Button>
                                  </GridItem>
                                  
                                  <GridItem xs={12} sm={12} md={6}>
                                  <br></br>
                                  
                                  <h6 className= "description" align="center" style={{color: 'black'}}>Open Everyday 8:00AM-5:00PM</h6>
                                  <p className= "description" align="center" style={{color: 'black'}}>Available After Hours For Estimates</p>
                                  <p className= "description" align="center" style={{color: 'black'}}>Maumelle, AR 72113</p>


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