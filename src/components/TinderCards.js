import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import HeightOutlinedIcon from '@material-ui/icons/HeightOutlined';
import FitnessCenterOutlinedIcon from '@material-ui/icons/FitnessCenterOutlined';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import InfoIcon from '@material-ui/icons/Info';
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from '@material-ui/core/styles';

import "./TinderCards.css";
import {database} from "../services/firebase";

const InfoIconOver = withStyles({
  root: {
    '&:hover': {
      fontSize: 60,
  },
    fontSize: 40,
    color: 'white',
  },
})(InfoIcon)

function TinderCards() {
  const [users, setUsers] = useState([]);
  // const [profileVisable, setProfileVisable] = useState(false);

  useEffect(() => {
    const unsubscribe = database
      .collection("users")
      .onSnapshot((snapshot) =>
        setUsers(snapshot.docs.map((doc) => doc.data()))
      );

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <div className="tinderCards__cardContainer">
        {users.map((user) => (
          <TinderCard
            className="swipe"
            key={user.url}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${user.url})` }}
              className="card"
            >
              <div className="card__text">
                <div className="card__name">
                  <h3>{user.firstName}</h3>
                  <h4>20</h4>
                </div>
                <div className="card__info">
                  <div className="card__info__line">
                    <HeightOutlinedIcon
                      style={{color: "white"}}/>
                    <h4>5'10"</h4>
                  </div>
                  <div className="card__info__line">
                    <FitnessCenterOutlinedIcon
                      style={{color: "white"}}/>
                    <h4> 220lb</h4>
                  </div>
                  <div className="card__info__line">
                    <AccessibilityIcon
                      style={{color: "white"}}/>
                    <h4>5'10"</h4>
                  </div>
                </div>
              </div>
              <div className="info__button">
                <IconButton
                  onClick={() => console.log("show info")}>
                  <InfoIconOver/>
                </IconButton>
              </div>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
