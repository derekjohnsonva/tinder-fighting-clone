import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import {database} from "../services/firebase";

function TinderCards() {
  const [users, setUsers] = useState([]);

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
            key={user.firstName}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${user.url})` }}
              className="card"
            >
              <div className="card__info">
                <h3>{user.firstName}</h3>
              </div>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
