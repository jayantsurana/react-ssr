import React from 'react';
//import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { initStore, initialCards, addItem } from '../store';
import withRedux from 'next-redux-wrapper';
import './index.css';
import Card from './Card';
//import data from '../data/data.json';

//export default class Index extends React.Component{
class Index extends React.Component{
    static async getInitialProps({ store }){
        //return { cards: data }
        store.dispatch(initialCards());
    }
    render(){
        return(
            <div className="App">
                <header className="App-header">
                    <img src="/static/logo.png"
                        className="static-logo" alt="logo"
                    />
                </header>
                <div className="Grid">
                    {
                        this.props.cards.map((card) => (
                            <Card key={card.id} />
                        ))
                    }
                </div>
            </div>
        )
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        initialCards: bindActionCreators(initialCards, dispatch),
        addItem: bindActionCreators(addItem, dispatch)
    }
}

const mapStateToProps = (state) => {
    return{
        cards: state.cards,
    }
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(Index);
//export default connect(initStore, mapStateToProps, mapDispatchToProps)(Index);