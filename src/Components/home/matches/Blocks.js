import React, { Component } from 'react';
import {firebaseMatches} from '../../../firebase';
import { firebaseLooper, reverseArray} from '../../ui/misc';
import MatchesBlock from '../../ui/matches_block';
import { Slide } from '@material-ui/core';



class Blocks extends Component {
    state = {
        matches:[]
    }

    componentDidMount(){
        //everything will request start from this
        //limitToLast(6) bring the last 6 element in array
        firebaseMatches.limitToLast(6).once('value').then((snapshot) => {
            //console.log(snapshot.val()); to console value of snapshot store
            const matches = firebaseLooper(snapshot); //variable
            // console.log(matches); //to check snapshot result
            this.setState({
                matches: reverseArray(matches)
            })
        })
    }
    showMatches = (matches) =>(
        matches ?
            matches.map((match) =>(
               
                    <div className="item">
                        <div className="wrapper">
                            <MatchesBlock match={match}/>
                        </div>
                    </div>
          
                
            ))
        :null
    )

    render() {
        console.log(this.state);
        return (
            <div className="home_matches">
                {this.showMatches(this.state.matches)}
            </div>
        );
    }
}

export default Blocks;