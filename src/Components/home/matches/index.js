//if use {} is only key if not use {} import all library key
import React from 'react';
import { Tag } from '../../ui/misc';
import Blocks from './Blocks';

const MatchesHome = () => {
    return (
        <div className="home_matches_wrapper">
            <div className="container">
                <Tag
                    bck='"#0e1731"'
                    size="50px"
                    color="#ffffff"
                    add={{color: 'red'}}
                >
                    Matches
                </Tag>
 
                <Blocks />

                <Tag
                    bck="#ffffff"
                    size="22px"
                    color="#0e1731"
                    link={true}
                    linkto="/the_team"
                >
                    See more matches
                </Tag>
            </div>
        </div>
    );
};

export default MatchesHome;