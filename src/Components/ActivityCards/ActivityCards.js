import React from 'react'
import { RiMovie2Line , RiMusic2Line} from "react-icons/ri";
import { FaPodcast, FaChessKnight} from "react-icons/fa";
import { CgCardHearts } from "react-icons/cg";
import './ActivityCards.scss'
export const ActivityCards = () => {
    return (
        <div className='activities-info'>

            <div className="activity-container">

                <div className="inner-activity-container">
                  <i className="activity-icon"> <RiMovie2Line className="icon"/> </i>
                  <h1 className="activity-name">Movies</h1>
                  <h3 className="activity-legend">be ready!</h3>
                  <p className="quote">"I'm going to make him an offer he can't refuse."</p>
                  <p className="quote-by"> - The Godfather, 1972</p>
                </div>

                <div className="inner-activity-container">
                  <i className="activity-icon"> <RiMusic2Line className="icon"/> </i>
                  <h1 className="activity-name">Music</h1>
                  <h3 className="activity-legend">be ready!</h3>
                  <p className="quote">“Music is the language of the spirit. It opens the secret of life bringing peace, abolishing strife.”</p>
                  <p className="quote-by">– Kahlil Gibran</p>
                </div>

                <div className="inner-activity-container">
                  <i className="activity-icon"> <FaPodcast className="icon"/> </i>
                  <h1 className="activity-name">Podcast</h1>
                  <h3 className="activity-legend">be ready!</h3>
                  <p className="quote">"Don't bore people. Don't worry too much about replicating someone else's formula. Be original with the way you podcast." -</p>
                  <p className="quote-by">- James Schramko </p>
                </div>

                <div className="inner-activity-container">
                  <i className="activity-icon"> <CgCardHearts className="icon"/> </i>
                  <h1 className="activity-name">Card Games</h1>
                  <h3 className="activity-legend">be ready!</h3>
                  <p className="quote"> Life is not a matter of holding good cards, but sometimes, playing a poor hand well.</p>
                  <p className="quote-by">– Jack London</p>
                </div>

                <div className="inner-activity-container">
                  <i className="activity-icon"> <FaChessKnight className="icon"/> </i>
                  <h1 className="activity-name">Board Games</h1>
                  <h3 className="activity-legend">be ready!</h3>
                  <p className="quote">“A man can learn all of an opponent's weaknesses on that board,' said Gilt.
                  'Really?' said Vetinari, raising his eyebrows. 'Should not he be trying to learn his own?”</p>
                  <p className="quote-by">― Terry Pratchett, Going Postal</p>
                </div>

            </div>

        </div>
    )
}
