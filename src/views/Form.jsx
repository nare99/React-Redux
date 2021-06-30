import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addUser } from '../store/actions/index'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AlarmOnIcon from '@material-ui/icons/AlarmOn';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.handlerSubmit = this.handlerSubmit.bind(this);
        this.state = {
            error: false
        }
    }

    setBorderTrue(error) {
        this.setState({error: true});
    }

    setBorderFalse() {
        this.setState({error: false});
    }

    handlerSubmit(event) {
        event.preventDefault();
        // this.props.addUser({ name: "Nare", job:  "SW Engineer" });
        if(event.target.name.value !== '' && event.target.job.value !== '') {
            this.setBorderFalse();
            this.props.addUser({ name: event.target.name.value, job: event.target.job.value });
            event.target.name.value = '';
            event.target.job.value = '';
        }
        else {
            this.setBorderTrue();
        }
    }

    render () {
        let error = this.state.error;
        return (
            <form onSubmit={this.handlerSubmit}>
                {/* { error ? <><input name='name' type='text' style={{borderColor: 'red'}}/><input name='job' type='text' style={{borderColor: 'red'}}/></>:<><input name='name' type='text'/><input name='job' type='text'/> </>} */}
                {/* <input name='name' type='text' style={{borderColor: error ? 'red' : 'black'}}/>
                <input name='job' type='text' style={{borderColor: error ? 'red' : 'black'}}/> */}
                <TextField error={error} name='name' type='text' variant='outlined' label='Name' helperText={error ? "name can't be empty" : ''}/>
                <TextField error={error} name='job' type='text' variant='outlined' label='Job' helperText={error ? "job can't be empty" : ''}/>
                {/* <input type='submit'/> */}
                <Button type='submit' variant="contained" color="primary"  endIcon={<AlarmOnIcon />}>Send</Button>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addUser }, dispatch)
}

export default connect(null, mapDispatchToProps)(Form);