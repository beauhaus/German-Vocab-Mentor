import React, { Component } from 'react'
import Menu from './Menu'
import DisplayCtrl from './DisplayCtrl'

import validator from 'validator';

class Landing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            init: 'state',
            dbArray: props.db,
            lowBound: null,
            upBound: null
        }
        this.onRangeSubmit = this.onRangeSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this)
    }
    componentWillUpdate(nextProps, nextState) {
        // console.log("landing UPDATED")
        // console.log("Land update: \nLow: ", this.state.lowBound, "\n up: ", this.state.upBound, "\n len: ", this.state.arrayMod.length)
    }

    handleInputChange(e) {
        const tgt = e.target;
        const value = tgt.value;
        const name = tgt.name;

        try {
            let valCheck = validator.isInt(value);
            if (!'' && !valCheck) {
                throw new SyntaxError(`${value} is NOT an integer`)
            }
            this.setState({
                [name]: value
            }
            );
        } catch (err) {
            console.log(`${value} is not an Integer`, err)
        } 

    }
    onRangeSubmit(e) {
        e.preventDefault();
    }

    render() {
        const { lowBound, upBound, dbArray } = this.state;
        return (
            <div className="landing-comp">
                <Menu handleInputChange={this.handleInputChange} onRangeSubmit={this.onRangeSubmit} />
                {(lowBound && upBound) &&
                    <DisplayCtrl
                        lowBound={lowBound}
                        upBound={upBound}
                        dbPayload={dbArray}
                    />}
            </div>
        )
    }
}

module.exports = Landing;
