import React from 'react';

const Gameplay = () => {
  
  return (
    <div className="w-100 mx-4">

        <h5>OpenFPL Gameplay: A Unique and Engaging Fantasy Football Experience</h5>

        <p>At OpenFPL, our gameplay rules are designed to create an immersive, engaging, and unique fantasy football experience. 
            We understand the passion and strategy that goes into fantasy football, and our gameplay rules are crafted to reflect this, 
            enhancing the fun and competitiveness of each gameweek.</p>

        <h5>Starting Funds and Team Composition</h5>

        <p>Each user begins their journey with £300m, a budget to strategically build their dream team. 
            The value of players fluctuates based on community ratings within the DAO. 
            If a player's performance garners enough votes, their value can either increase or decrease by £0.25m each gameweek.</p>

        <p>In terms of team structure, each user's team consists of 11 players. Picking from a range of clubs is key, so a maximum of two players from any single club can be selected. 
            Teams must adhere to a valid formation: 1 goalkeeper, 3-5 defenders, 3-5 midfielders, and 1-3 strikers.</p>

        <h5>Transfers and Team Management</h5>

        <p>Flexibility is a cornerstone of our gameplay. Users can make up to three transfers per week, allowing for dynamic team management 
            and adaptation to the ever-changing football landscape. These transfers don't roll over, encouraging active participation each week. 
            There are no substitutes in our game, eliminating the frustration of unused bench points.</p>
        
        <p>Each January, users can overhaul their team completely once, adding another strategic layer to the game reflecting the January transfer window.</p>

        <h1>Scoring System</h1>

        <p>Our scoring system is intuitive and rewards players for key contributions on the field:</p>

        <ul>
            <li>Appearing in the game: +5 points</li>
            <li>Every 3 saves a goalkeeper makes: +5 points</li>
            <li>Goalkeeper or defender cleansheet: +10 points</li>
            <li>Forward scores a goal: +10 points</li>
            <li>Midfielder or Forward assists a goal: +10 points</li>
            <li>Midfielder scores a goal: +15 points</li>
            <li>Goalkeeper or defender assists a goal: +15 points</li>
            <li>Goalkeeper or defender scores a goal: +20 points</li>
            <li>Goalkeeper saves a penalty: +20 points</li>
            <li>Player is highest scoring player in match: +25 points</li>
            <li>Player receives a red card: -20 points</li>
            <li>Player misses a penalty: -15 points</li>
            <li>Each time a goalkeeper or defender concedes 2 goals: -15 points</li>
            <li>A player scores an own goal: -10 points</li>
            <li>A player receives a yellow card: -5 points</li>
        </ul>

        <h5>Unique Bonuses</h5>

        <p>OpenFPL elevates the gameplay with a diverse set of bonuses. These bonuses play a pivotal role in keeping OpenFPL's gameplay both fresh and exhilarating. 
            Their strategic implementation allows for significant shifts in the leaderboard, ensuring that the competition remains open and dynamic. 
            With these bonuses, any user, regardless of their position, has the potential to make a substantial leap in the rankings. 
            This unpredictability means that victory is within reach for every participant, fostering a thrilling environment 
            where every gameweek holds the promise of a shake-up at the top of the leaderboard.</p>

            <ul>
                <li>Goal Getter: X3 multiplier for each goal scored by a selected player.</li>
                <li>Pass Master: X3 multiplier for each assist by a selected player.</li>
                <li>No Entry: X3 multiplier for a selected goalkeeper/defender for a clean sheet.</li>
                <li>Safe Hands: X3 multiplier for a goalkeeper making 5 saves.</li>
                <li>Captain Fantastic: X2 multiplier on the captain’s score for scoring a goal.</li>
                <li>Team Boost: X2 multiplier for all players from a single club.</li>
                <li>Brace Bonus: X2 multiplier for any player scoring 2+ goals.</li>
                <li>Hat Trick Hero: X3 multiplier for any player scoring 3+ goals.</li>
                <li>Countrymen: Double points for players of a selected nationality.</li>
                <li>Youth Prospects: Double points for players under 21.</li>
            </ul>

            <p>Each week a user can select a star player. This player will receive double points for the gameweek. 
                If one is not set by the start of the gameweek it will automatically be set to the most valuable player in your team.</p>

            <p>OpenFPL's gameplay combines strategic team management, a dynamic scoring system, and diverse bonuses, offering a unique and competitive fantasy football experience. 
                Each decision impacts your journey through the Premier League season, where football knowledge and strategy lead to rewarding outcomes.</p>







    </div>
  );
};

export default Gameplay;
