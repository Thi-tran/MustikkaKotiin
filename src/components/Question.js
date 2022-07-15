import React, { Component } from 'react';
import mePic from '../styles/img/me.jpg';

import SnackBar from './SnackBar';
import Fab from '@material-ui/core/Fab';
import { addQuestion } from '../firebase';

const initialState = {
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
        const { name, email, question } = this.state;
        addQuestion(name, email, question);

        this.setState({
            ...initialState,
            snackbar: true
        });

    }
    render() {
        const { snackbar } = this.state;
        return (
            <section className="section-question pb-5" id="Question">
                <div className="row">
                    <h2 className="mx-auto">Yhteydenotto</h2>
                </div>

                <div className="row">
                    <div className="span-1-of-3" style={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
                        <img src={mePic} className="question-picture" alt="mypic" />
                    </div>
                    <div className="span-2-of-3 question-input-container">
                        <form className="form-horizontal mx-auto" onSubmit={(e) => this.onSubmit(e)} >
                            <div className="form-group">
                                <div className="row mb-2">
                                    <input type="text" name="name" id="name" placeholder="Nimi" required
                                        value={this.state.name} onChange={(e) => { this.onChange(e) }}
                                    />
                                </div>

                                <div className="row mb-2">
                                    <input type="email" name="email" id="email" placeholder="Sähköposti" required
                                        value={this.state.email} onChange={(e) => { this.onChange(e) }}
                                    />
                                </div>

                                <div className="row mb-2">
                                    <textarea name="question" id="message" placeholder="Kysymys" required
                                        value={this.state.question} onChange={(e) => { this.onChange(e) }}
                                    ></textarea>
                                </div>

                                <div className="question-btn">
                                    <Fab type="submit" variant="extended" color="primary" aria-label="Add" >
                                        LAHETA
                                    </Fab>
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