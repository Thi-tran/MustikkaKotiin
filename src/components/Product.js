import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { UserContext } from '../pages/HomePage';

const styles = theme => ({
    card: {
        maxWidth: '70%',
        margin: '0 auto'
    },
    media: {
      height: 0,
      paddingBottom: '50%', // 16:9
    }
  });


class Product extends Component {
    render() {
        const { classes } = this.props;
        const {id, title, mainPic, description, price, numBox} = this.props
        return (
            <UserContext.Consumer>
            {({onHandleAddBox, onHandleDeleteBox, onHandleAddBoxToCart}) => 
                <div className="col mb-3">
                    <Card className="card">
                        <CardHeader
                            title={title}
                        />
                        <CardMedia
                            className={classes.media}
                            image={mainPic}
                            title={title}
                        />
                        <CardContent className="card-description">
                            <Typography component="p">
                                {description}                        
                            </Typography>
                        </CardContent>
                        <CardContent>
                            <Typography component="p">
                                 {price} €                        
                            </Typography>
                        </CardContent>

                        <CardActions>
                            <div className="mx-auto">
                                <TextField value={numBox} style={{width: '28px'}} className="mr-2"></TextField>
                                <Fab size="small" color="secondary" aria-label="Add" className="mx-1">
                                    <AddIcon onClick={() => onHandleAddBox(id)}/>
                                </Fab>
                                <Fab size="small" aria-label="Remove" className="mx-1">
                                    <RemoveIcon onClick={() => onHandleDeleteBox(id)}/>
                                </Fab>
                            </div>
                        </CardActions>
                        <CardActions disableActionSpacing>

                            <Fab variant="extended" color="primary" aria-label="Add" className="mx-auto mb-2" 
                                onClick={() => onHandleAddBoxToCart(id)}
                            >
                                LISÄÄ OSTOSKORIIN
                            </Fab>
                        </CardActions>
                    </Card>
                </div>

                
            }
            </UserContext.Consumer>
        );
    }
}
Product.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Product);
