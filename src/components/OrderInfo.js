import React, { Component } from 'react'

export default class OrderInfo extends Component {
  render() {
    const {delivery} = this.props;
    return (
      <form class="form-horizontal mx-auto">
        {(delivery == "home") ? (
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
                  <label for="exampleInputEmail1">Lempitoimitusaika</label>
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
          ) : <div>
            snv
          </div>}


        </form>
    )
  }
}
