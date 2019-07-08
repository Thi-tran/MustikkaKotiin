import React, { Component } from 'react';
import logo from '../styles/img/logo.png';
import ProductOrder from './ProductOrder';
import {addOrder} from '../firebase';

import { Navbar, Nav } from 'react-bootstrap';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Scrollchor from 'react-scrollchor';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import DialogTitle from '@material-ui/core/DialogTitle';

import Button from '@material-ui/core/Button';
import SnackBar from './SnackBar';



const styles = theme => ({
  dialogTitle: {
    padding: 0,
  }, 
  container: {
    marginLeft: '10px'
  },
  content: {
    textAlign: 'center'
  }
});

const initalState = {
  open: false,
  city: '',
  name: '',
  number: '',
  address: '',
  post: '',
  email: '',
  deliverTime: {
    '9-11': false,
    '14-16': false,
    '18-20': false
  },  
  pickupTime: {
    '8-9': false,
    '16.30-17.30': false
  },
  delivery: ''
}
class NavbarHomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initalState,
      orderList: this.props.orderList,
      orderSent: false, 
      orderError: '',
      thankYouDialog: false
    }
  }
  
  imageClick = () => {
    console.log('click')
  }
  onCheckCart = () => {
    this.setState({open: true});
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onHandleDeliveryTime = (change) => {
    let deliverTime = this.state.deliverTime;
    deliverTime[`${change}`] = !deliverTime[`${change}`];
    this.setState({ deliverTime });
  }

  onHandlePickupTime = (change) => {
    let pickupTime = this.state.pickupTime;
    pickupTime[`${change}`] = !pickupTime[`${change}`];
    this.setState({ pickupTime });
  }

  onHandleIncBox = (id) => {
    const orderList = this.state.orderList;
    orderList[`${id}`].order ++;
    this.setState({orderList});
    localStorage.setItem(`order-${id}`,orderList[`${id}`].order);
  }

  onHandleDecBox = (id) => {
    const orderList = this.state.orderList;
    orderList[`${id}`].order --;
    this.setState({orderList});
    localStorage.setItem(`order-${id}`,orderList[`${id}`].order);
  }


  onHandleRemoveBox = (id) => {
    const orderList = this.state.orderList;
    orderList[`${id}`].order = 0;
    this.setState({orderList});

    localStorage.removeItem(`order-${id}`);

    let isOrderLeft = false;
    this.state.orderList.forEach(order => {
      if (order.order > 0) isOrderLeft = true;
    })

    if (!isOrderLeft) this.props.resetOrder();
  }

  submitOrder = () => {
    const { delivery, name, address, post, number, email, city, deliverTime, pickupTime, orderList } = this.state;
    addOrder(delivery, name, address, post, number, email, city, deliverTime, pickupTime, orderList);

    this.props.resetOrder();

    localStorage.removeItem(`order-0`);
    localStorage.removeItem(`order-1`);


    this.setState({
      orderSent: true,
      open: false,
      thankYouDialog: true
    });
  }

  resetForm = () => {
    this.setState({...initalState, open:true})
  }

    render() {
      const {classes, makeOrder} = this.props;
      const { orderList, name, number, address, post, orderSent,delivery, email, city} = this.state;

      let deliveryFee;
      (delivery === "home") ? deliveryFee = 5 : deliveryFee = 0;
      let price = 0; 
      orderList.forEach(order => {
        price += order.order * order.price
      })
      const total = (price + deliveryFee).toFixed(2);

      // check if user can place an order
      let canOrder = false;  
      if (((delivery === "home") && (name) && (number) && (email) && (address) && (post) && (city)) || 
          ((delivery === "pickup") && (name) && (number) && (email))) 
          canOrder = true;


      return (
          <span >
          {/* Nav bar */}
            <Navbar collapseOnSelect="true" bg="white" expand="lg" sticky="top" className="navbar">
              <Navbar.Brand className="mr-0 py-0" style={{height: 55}}>
                  <Scrollchor to="#Home" animate={{offset: -150, duration: 600}} className="navbar-brand ml-2">
                      <img src={logo} className="logo" alt="logo"/>
                  </Scrollchor>
              </Navbar.Brand>
              
              <Nav className="mr-auto">
              </Nav>

              <Navbar.Collapse id="responsive-navbar-nav ">
                  <Nav className="main-nav pr-2">
                    <li className="nav-item ml-2 pt-1" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Scrollchor to="#About" animate={{offset: -50, duration: 600}} className="nav-text">Tarina</Scrollchor>
                    </li>

                    <li className="nav-item ml-2 pt-1" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Scrollchor to="#Contact" animate={{offset: -50, duration: 600}} className="nav-text">Tilaa</Scrollchor>
                    </li>

                    <li className="nav-item ml-2 pt-1" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Scrollchor to="#Product" animate={{offset: -50, duration: 600}} className="nav-text">Mustikat</Scrollchor>
                    </li>

                    <li className="nav-item ml-2 pt-1" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Scrollchor to="#Testimonial" animate={{offset: -70, duration: 600}} className="nav-text">Muistoottelu</Scrollchor>
                    </li>

                    <li className="nav-item ml-2 pt-1" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Scrollchor to="#Question" animate={{offset: -50, duration: 600}} className="nav-text">Kysymys</Scrollchor>
                    </li>
                  </Nav>
              </Navbar.Collapse>
              <Nav>
                  <li className="nav-item pr-2 ml-2" >
                      { (!makeOrder) ? <img src='img/basket.svg' alt="no-order" className=" basket-logo" onClick={this.onCheckCart}/> 
                        : <img src='img/basket-withOrder.svg' alt="has-order" className=" basket-logo" onClick={this.onCheckCart}/>
                      }
                  </li>            
              </Nav>
          </Navbar>

          {/* Order Dialog */}
          {(makeOrder) ? (
            <Dialog
              open={this.state.open}
              onClose={() => {this.setState({open:false})}}
              aria-labelledby="form-dialog-title"
              maxWidth='sm'
              withmobiledialog="true"
            >
            <DialogTitle 
              id="form-dialog-title pb-0"
              className={classes.dialogTitle}
            >Ostoskori</DialogTitle>
            
            <DialogContent
              className="classes.content"
            >
                <div className="row">
                  {orderList.map((order) => {
                      if (order.order > 0) {
                        return <ProductOrder 
                          key={order.id}
                          {...order}
                          onHandleIncBox={this.onHandleIncBox}
                          onHandleDecBox={this.onHandleDecBox}
                          onHandleRemoveBox={this.onHandleRemoveBox}
                        />
                      }
                    }
                  )}
                </div>
                <h5 className="text-center">Tilauksen teidot</h5>
                    <fieldset className="form-group mb-0" required>
                      <div className="row">
                        <div className="form-check mx-1">
                            <input className="form-check-input" type="radio" name="is_city"
                              onChange={(e) => {
                                this.resetForm();
                                this.setState({delivery: 'home'});
                              }}
                            />
                            <label className="form-check-label" htmlFor="gridRadios1">
                            Kotiin toimistus (5€)
                            </label>
                        </div>
                        <div className="form-check mx-1">
                            <input className="form-check-input" type="radio" name="is_city"
                              onChange={(e) => {
                                this.resetForm();
                                this.setState({delivery: 'pickup'});
                              }}
                            />
                            <label className="form-check-label" htmlFor="gridRadios2">
                            Nouda Työpajankatu 5
                            </label>
                        </div>
                      </div>
                  </fieldset>
                  <form className="form-horizontal mx-auto">
                  {(delivery === "home") && (
                    <div className="form-group mb-0">
                        <div className="col">
                            <input type="text" className="form-control mb-2" required placeholder="Nimi"
                              name="name" value={name} onChange={(e) => this.handleChange(e)}
                            />
                        </div>
                        <div className="col">
                            <input type="number" className="form-control mb-2" required placeholder="Puhelinnumero"
                              name="number" value={number} onChange={(e) => this.handleChange(e)}
                            />
                        </div>
                        <div className="col">
                            <input type="email" className="form-control mb-2" required placeholder="Sähköposti"
                              name="email" value={email} onChange={(e) => this.handleChange(e)}
                            />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control mb-2" required placeholder="Osoite"
                              name="address" value={address} onChange={(e) => this.handleChange(e)}
                            />
                        </div>
                        <div className="col">
                            <input type="number" className="form-control mb-2" required placeholder="Postinumero"
                              name="post" value={post} onChange={(e) => this.handleChange(e)}
                            />
                        </div>
                        <fieldset className="form-group mb-0" required>
                            <label htmlFor="exampleInputEmail1">Kaupunki</label>
                              <div className="form-check mx-1">
                                  <input className="form-check-input" type="radio" name="is_city"
                                    onChange={(e) => {this.setState({city: 'Helsinki'})}}
                                  />
                                  <label className="form-check-label" htmlFor="gridRadios1">
                                  Helsinki
                                  </label>
                              </div>
                              <div className="form-check mx-1">
                                  <input className="form-check-input" type="radio" name="is_city"
                                    onChange={(e) => {this.setState({city: 'Espoo'})}}
                                  />
                                  <label className="form-check-label" htmlFor="gridRadios2">
                                  Espoo
                                  </label>
                              </div>
                              <div className="form-check mx-1">
                                  <input className="form-check-input" type="radio" name="is_city"
                                    value="vantaa" onChange={(e) => {this.setState({city: 'Vantaa'})}}
                                  />
                                  <label className="form-check-label" htmlFor="gridRadios2">
                                  Vantaa
                                  </label>
                              </div>
                        </fieldset>
                        <fieldset className="form-group mb-0" required>
                            <label htmlFor="exampleInputEmail1">Lempitoimitusaika</label>
                            <div className="row">
                              <div className="form-check mx-1">
                                  <input className="form-check-input" type="checkbox" value="9-11" onChange={(e) => this.onHandleDeliveryTime(e.target.value)}/>
                                  <label className="form-check-label" htmlFor="gridRadios1">
                                  9.00 - 11.00
                                  </label>
                              </div>
                              <div className="form-check mx-1">
                                  <input className="form-check-input" type="checkbox" value="14-16" onChange={(e) => this.onHandleDeliveryTime(e.target.value)}/>
                                  <label className="form-check-label" htmlFor="gridRadios2">
                                  14.00 - 16.00
                                  </label>
                              </div>
                              <div className="form-check mx-1">
                                  <input className="form-check-input" type="checkbox" value="18-20" onChange={(e) => this.onHandleDeliveryTime(e.target.value)}/>
                                  <label className="form-check-label" htmlFor="gridRadios2">
                                  18.00 - 20.00
                                  </label>
                              </div>
                            </div>
                        </fieldset>
                    </div> 
                   )}
                   {(delivery === "pickup") && (
                    <div className="form-group mb-0">
                        <div className="col">
                            <input type="text" className="form-control mb-2" required placeholder="Nimi"
                              name="name" value={name} onChange={(e) => this.handleChange(e)}
                            />
                        </div>
                        <div className="col">
                            <input type="number" className="form-control mb-2" required placeholder="Puhelinnumero"
                              name="number" value={number} onChange={(e) => this.handleChange(e)}
                            />
                        </div>
                        <div className="col">
                            <input type="email" className="form-control mb-2" required placeholder="Sähköposti"
                              name="email" value={email} onChange={(e) => this.handleChange(e)}
                            />
                        </div>

                        <fieldset className="form-group" required>
                            <label htmlFor="exampleInputEmail1">Lempinoutaaika</label>
                            <div className="row">
                              <div className="form-check mx-1">
                                  <input className="form-check-input" type="checkbox" value="8-9" onChange={(e) => this.onHandlePickupTime(e.target.value)}/>
                                  <label className="form-check-label" htmlFor="gridRadios1">
                                  8.00 - 9.00
                                  </label>
                              </div>
                              <div className="form-check mx-1">
                                  <input className="form-check-input" type="checkbox" value="16.30-17.30" onChange={(e) => this.onHandlePickupTime(e.target.value)}/>
                                  <label className="form-check-label" htmlFor="gridRadios2">
                                  16.30 - 17.30
                                  </label>
                              </div>
                            </div>
                        </fieldset>
                    </div>
                   )}
                   <span className="pb-4 pt-0"></span>
                   <div className="d-flex justify-content-end">Toimistuskulu {deliveryFee} €</div>
                   <h6 className="d-flex justify-content-end">YHDESSÄ <span className="mr-2"></span> <strong>{total} €</strong></h6> 
                   
                  </form>
              </DialogContent>
              <DialogActions>
                  <Button onClick={() => {this.setState({open:false, delivery: ''})}} color="primary">
                      PALAA
                  </Button>
                  {(canOrder)? 
                  <Button onClick={this.submitOrder} variant="contained" color="primary"  >
                      TEE TILAUS
                  </Button> : 
                  <Button disabled variant="contained" color="primary"  >
                      TEE TILAUS
                  </Button> 
                  }
                  
              </DialogActions>
              </Dialog>
              ) : (
              <Dialog
                open={this.state.open}
                onClose={() => {this.setState({open:false})}}
                aria-labelledby="form-dialog-title"
              >
                <DialogTitle id="form-dialog-title">Tyhjä ostoskori</DialogTitle>
              </Dialog>
              )}

              {orderSent && <SnackBar 
                open={orderSent}
                message="Tilauksesi on vastaanotettu!"
                variant="success"
                vertical="bottom"
                horizontal="left"
              />}

              <Dialog
                open={this.state.thankYouDialog}
                onClose={() => {this.setState({thankYouDialog:false})}}
                aria-labelledby="form-dialog-title"
              >
              <DialogTitle id="form-dialog-title"
                className={classes.dialogTitle}
              >
                Kiitos tilauksestasi!
              </DialogTitle>
              <DialogContent
                className="classes.content"
              > 
                <div className="row" style={{justifyContent: 'center', paddingBottom:20}}>
                  <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/198/smiling-face-with-smiling-eyes_1f60a.png" 
                    alt="Smiley Face"
                    style={{height: 40}}
                  />
                  <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/198/heavy-black-heart_2764.png" 
                    alt="Heart"
                    style={{height: 40}}
                  />
                  <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/198/glowing-star_1f31f.png" 
                    alt="Star"
                    style={{height: 40}}
                  />
                </div>
                <h5 className="text-center">Otamme sinuun yhteyttä pian puhelimitse järjestääksesi toimitusajan</h5>
                <div className="text-center">Mikäli sinulla on kysyttävää, otathan yhteyttä asiakaspalveluumme</div>
              </DialogContent>
              </Dialog>
          </span>
        );
    }
}

NavbarHomePage.propTypes = {
  classes: PropTypes.object.isRequired,
  
};
export default withStyles(styles)(NavbarHomePage);