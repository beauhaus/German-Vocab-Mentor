import React, {Component} from 'react';
import {getPartialLS, utilCtrl} from '../utils/utils';

class VocabCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            init: "",
        }
        // this.buttonSetLSClick = this.buttonSetLSClick.bind(this);
    }
    componentDidMount() {
        console.log("VocabCard  loaded")
    }
    componentWillUpdate(nextProps, nextState) {
        console.log("VocabCard  updated")
    }

    render() {
        const {id, word_en, word_de, example_en, example_de} = this.props.entry;
        const {idx} = this.props;

        return (
            <div id="vocab-card" className={((id===0||id%2)?`vocab-card-left`:`vocab-card-right`)}>
                <h1 className="card-property" id="card-idx">{idx} </h1>
                <h1 className="card-property" id="word-en">{word_en}</h1>
                <h3 className="card-property" id="word-de">{word_de}</h3>
                <h1 className="card-property" id="example-en">{example_en}</h1>
                <h3 className="card-property" id="example-de">{example_de}</h3>
            </div>
        );
    }
}

module.exports = VocabCard;


