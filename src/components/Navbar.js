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
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SnackBar from './SnackBar';
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  margin: {
    margin: theme.spacing.unit,
  },

});

const initalState = {
  open: false,
  city: '',
  name: '',
  number: '',
  address: '',
  post: '',
  deliverTime: {
    a9to11: false,
    a14to16: false,
    a18to20: false
  },
  
}
class NavbarHomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initalState,
      orderList: this.props.orderList,
      orderSent: false, 
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
    const deliverTime = this.state.deliverTime;
    console.log(deliverTime[`${change}`]);
    deliverTime[`${change}`] = !deliverTime[`${change}`];
    this.setState({ deliverTime });
  }

  onHandleIncBox = (id) => {
    const orderList = this.state.orderList;
    orderList[`${id}`].order ++;
    this.setState({orderList});
  }

  onHandleDecBox = (id) => {
    const orderList = this.state.orderList;
    orderList[`${id}`].order --;
    this.setState({orderList});
  }


  onHandleRemoveBox = (id) => {
    const orderList = this.state.orderList;
    orderList[`${id}`].order = 0;
    this.setState({orderList});
  }

  submitOrder = () => {
    const { orderList, name, city, number, address, post, deliverTime } = this.state;
    addOrder(name, address, post, number, city, deliverTime, orderList);

    this.props.resetOrder();

    this.setState({
      ...initalState,   
      orderList: this.props.orderList,
      orderSent: true,
    });

  }

    render() {
      const {classes, makeOrder} = this.props;
      const { orderList, name, city, number, address, post, orderSent } = this.state;

      return (
          <span >
          {/* Nav bar */}
            <Navbar collapseOnSelect="true" bg="white" expand="lg" sticky="top" >
              <Navbar.Brand className="mr-0">
                  <Scrollchor to="#Home" animate={{offset: -150, duration: 600}} className="navbar-brand navbar ml-2">
                      <img src={logo} className="logo" alt="logo"/>
                  </Scrollchor>
              </Navbar.Brand>
              
              <Nav className="mr-auto">
              </Nav>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav ">
                  <Nav className="main-nav pr-2">
                      <Nav.Link>
                          <li className="nav-item"  className="ml-2">
                          <Scrollchor to="#About" animate={{offset: -50, duration: 600}} className="nav-text">Tarina</Scrollchor>
                          </li>
                      </Nav.Link>

                      <Nav.Link>
                          <li className="nav-item" className="ml-2 ">
                              <Scrollchor to="#Contact" animate={{offset: -50, duration: 600}} className="nav-text">Tilaa</Scrollchor>
                          </li>
                      </Nav.Link>

                      <Nav.Link>
                          <li className="nav-item" className="ml-2">
                              <Scrollchor to="#Product" animate={{offset: -50, duration: 600}} className="nav-text">Mustikat</Scrollchor>
                          </li>
                      </Nav.Link>

                      <Nav.Link>
                          <li className="nav-item" className="ml-2">
                              <Scrollchor to="#Testimonial" animate={{offset: -70, duration: 600}} className="nav-text">Muistoottelu</Scrollchor>
                          </li>
                      </Nav.Link>
                      
                      <Nav.Link>
                          <li className="nav-item" className="ml-2">
                              <Scrollchor to="#Question" animate={{offset: -50, duration: 600}} className="nav-text">Kysymys</Scrollchor>
                          </li>
                      </Nav.Link>
                  </Nav>
              </Navbar.Collapse>
              <Nav className="">
                  <li className="nav-item pr-2 ml-2">
                      { (!makeOrder) ? <img src='img/basket.svg' className=" basket-logo" onClick={this.onCheckCart}/> 
                        : <img src='img/basket-withOrder.svg' className=" basket-logo" onClick={this.onCheckCart}/>
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
            >
            <DialogTitle id="form-dialog-title py-0">Ostoskori</DialogTitle>
            <DialogContent>
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
                <h5 className="text-center">Please fill out your order info</h5>
                  <form class="form-horizontal mx-auto">
                    <div class="form-group">
                        <div class="col">
                            <input type="text" class="form-control mb-2" required placeholder="Nimi"
                              name="name" value={name} onChange={(e) => this.handleChange(e)}
                            />
                        </div>
                        <div class="col">
                            <input type="number" class="form-control mb-2" required placeholder="Puhelinnumero"
                              name="number" value={number} onChange={(e) => this.handleChange(e)}
                            />
                        </div>
                        <div class="col">
                            <input type="text" class="form-control mb-2" required placeholder="Osoite"
                              name="address" value={address} onChange={(e) => this.handleChange(e)}
                            />
                        </div>
                        <div class="col">
                            <input type="number" class="form-control mb-2" required placeholder="Postinumero"
                              name="post" value={post} onChange={(e) => this.handleChange(e)}
                            />
                        </div>
                        <fieldset class="form-group mb-0" required>
                            <label for="exampleInputEmail1">Kaupunki</label>
                            <div class="row">
                              <div class="form-check mx-1">
                                  <input class="form-check-input" type="radio" name="is_city"
                                    onChange={(e) => {this.setState({city: 'Helsinki'})}}
                                  />
                                  <label class="form-check-label" for="gridRadios1">
                                  Helsinki
                                  </label>
                              </div>
                              <div class="form-check mx-1">
                                  <input class="form-check-input" type="radio" name="is_city"
                                    onChange={(e) => {this.setState({city: 'Espoo'})}}
                                  />
                                  <label class="form-check-label" for="gridRadios2">
                                  Espoo
                                  </label>
                              </div>
                              <div class="form-check mx-1">
                                  <input class="form-check-input" type="radio" name="is_city"
                                    value="vantaa" onChange={(e) => {this.setState({city: 'Vantaa'})}}
                                  />
                                  <label class="form-check-label" for="gridRadios2">
                                  Vantaa
                                  </label>
                              </div>
                            </div>
                        </fieldset>
                        <fieldset class="form-group" required>
                            <label for="exampleInputEmail1">Prefered delivery time</label>
                            <div class="row">
                              <div class="form-check mx-1">
                                  <input class="form-check-input" type="checkbox" value="a9to11" onChange={(e) => this.onHandleDeliveryTime(e.target.value)}/>
                                  <label class="form-check-label" for="gridRadios1">
                                  9.00 - 11.00
                                  </label>
                              </div>
                              <div class="form-check mx-1">
                                  <input class="form-check-input" type="checkbox" value="a14to16" onChange={(e) => this.onHandleDeliveryTime(e.target.value)}/>
                                  <label class="form-check-label" for="gridRadios2">
                                  14.00 - 16.00
                                  </label>
                              </div>
                              <div class="form-check mx-1">
                                  <input class="form-check-input" type="checkbox" value="a18to20" onChange={(e) => this.onHandleDeliveryTime(e.target.value)}/>
                                  <label class="form-check-label" for="gridRadios2">
                                  18.00 - 20.00
                                  </label>
                              </div>
                            </div>
                        </fieldset>
                    </div>
                  </form>

              </DialogContent>
              <DialogActions>
                  <Button onClick={() => {this.setState({open:false})}} color="primary">
                      PALAA
                  </Button>
                  <Button onClick={this.submitOrder} variant="contained" color="primary"  >
                      TEE TILAUS
                  </Button>
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
                message="Order sent"
                variant="success"
                vertical="bottom"
                horizontal="left"
              />}
          </span>
        );
    }
}

NavbarHomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavbarHomePage);