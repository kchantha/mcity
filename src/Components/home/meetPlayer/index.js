import React, { Component } from 'react';
import Stripes from '../../../Resources/images/stripes.png';
import { Tag } from '../../ui/misc';
import Reveal from 'react-reveal/Reveal';
import HomeCards from './cards';

class MeetPlayers extends Component {

    state ={
        show: false
    }
    render(){
        return (
            <Reveal
                fraction={0.7}  //allow this show after all component end
                onReveal={() =>{
                    this.setState({
                        show:true
                    })
                }}
            >
                <div className="home_meetplayers"
                    style={{
                        background: `#ffffff url(${Stripes})`
                    }}
                >
                    <div className="container">
                        <div className="home_meetplayers_wrapper">
                            <div className="home_card_wrapper">
                                <HomeCards 
                                    show={this.state.show}
                                />
                            </div>
                            <div className="home_text_wrapper">
                                <Tag
                                    bck="#0e1731"
                                    size="100px"
                                    color="#ffffff"
                                    add={{
                                        display: 'inline-block',
                                        marginBottom: '20px'
                                    }}
                                >
                                    Meet
                                </Tag>
                                <Tag
                                    bck="#0e1731"
                                    size="100px"
                                    color="#ffffff"
                                    add={{
                                        display: 'inline-block',
                                        marginBottom: '20px'
                                    }}
                                >
                                    The
                                </Tag>
                                <Tag
                                    bck="#0e1731"
                                    size="100px"
                                    color="#ffffff"
                                    add={{
                                        display: 'inline-block',
                                        marginBottom: '20px'
                                    }}
                                >
                                    Player
                                </Tag>
                            </div>
                            <div>
                                <Tag
                                    bck="#ffffff"
                                    size="27px"
                                    color="#0e1731"
                                    link={true}
                                    linkto="/the_team"
                                    add={{
                                        display: 'inline-block',
                                        marginBottom: '20px',
                                        border: '1px solid #0e1731'
                                    }}
                                >
                                    Meet Them Here
                                </Tag>
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>
            
        );
    }
    
};

export default MeetPlayers;