import React, { Component } from 'react';
import mePic from '../styles/img/me.jpg';
import {addQuestion} from '../firebase';
import SnackBar from './SnackBar';
const initialState={
    name: '',
    email: '',
    question: ''
}
class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...initialState,
            snackbar: false        
        }
    }
    
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
          })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const {name, email, question} = this.state;
        // addQuestion(name, email, question);
        this.setState({
            ...initialState,
            snackbar: true
        });
        
    }
    render() {
        const {snackbar} = this.state;
        return (
            <section className="section-question pb-5" id="Question">
                <div className="row">
                    <h2 className="mx-auto">Kysymys</h2>
                </div>
                
                <div className="row">
                    <div className="span-1-of-3 question-picture-part">
                        <img src={mePic} className="question-picture" />
                    </div>
                    <div className="span-2-of-3">
                    <form class="form-horizontal mx-auto" onSubmit={(e) => this.onSubmit(e)} >
                        <div class="form-group">
                        <div className="row mb-2">
                            <input type="text" name="name" id="name" placeholder="Nimi" required 
                                value={this.state.name} onChange={(e)=> {this.onChange(e)}}
                            />
                        </div>

                        <div className="row mb-2">
                            <input type="email" name="email" id="email" placeholder="Sähköposti" required 
                                value={this.state.email} onChange={(e)=> {this.onChange(e)}}
                            /> 
                        </div>

                        <div className="row mb-2">
                            <textarea name="question" id="message" placeholder="Kysymys" required
                                value={this.state.question} onChange={(e)=> {this.onChange(e)}}
                            ></textarea>
                        </div>

                        <div className="row send-btn">
                            <div className="col span-2-of-3">
                                <label>&nbsp;</label>
                            </div>
                            
                            <div className="col span-1-of-3 pr-0">
                                <input type="submit" value="LAHETA" className="btn btn-primary"/>
                            </div>
                        </div>
                        </div>
                    </form>

                    </div>
                </div>
                {snackbar && <SnackBar 
                    open={snackbar}
                    message="Kysymyksesi on lähetetty"
                    variant="success"
                    vertical="bottom"
                    horizontal="left"
                />}
            </section>
        );
    }
}

export default Question;