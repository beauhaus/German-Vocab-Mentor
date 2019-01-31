import React, {Component} from 'react';
import VocabCard from './VocabCard';

class DisplayCtrl extends Component {
    constructor(props) {
        super(props)
        this.state = {
            init: "",
            payloadLower: "init",
            payloadUpper: "init"
        }
        // this.buttonSetLSClick = this.buttonSetLSClick.bind(this);
    }
    componentDidMount() {
        console.log("DisplayCTRL  loaded")
    }
    componentWillUpdate(nextProps, nextState) {
        console.log("DisplayCTRL  updated")
    }

    render() {
        const {payloadLower, payloadUpper, dbPayload} = this.props;
        
        return (
            <div className="displayCtrl-box">
                {dbPayload.map((entry, idx) => (
                    ((payloadLower-1 <= idx  && payloadUpper >= idx) ) &&
                    <VocabCard key={idx} entry={entry} />
                    ))}
            </div>
        );
    }
}

module.exports = DisplayCtrl;


