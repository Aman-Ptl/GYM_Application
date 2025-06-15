import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          Experience the most dynamic and energy-packed workouts designed by our
          expert trainers. From fat-blasting HIIT to full-body strength
          training, these sessions are crafted to give you real results — fast.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Ready to crush your goals? Our Featured Bootcamps are specially
          designed to push your limits and get real results. Join our expert-led
          HIIT, Fat-Burn, Strength Builder, or Summer Shred Bootcamps and become
          the best version of yourself in just a few weeks.
          <h3>Limited slots – Book Now!</h3>
        </p>
        <div className="bootcamps">
          <div>
            <h4>1. Fat Burn Bootcamp</h4>
            <p>
              <strong>Goal:</strong> Rapid weight loss and fat reduction
            </p>
            <p>
              <strong>Features:</strong>
              <ul>
                <li>High-Intensity Interval Training (HIIT)</li>
                <li>Cardio + Core workouts</li>
                <li>Daily calorie tracker</li>
              </ul>
            </p>
          </div>
          <div>
            <h4>2. Strength & Conditioning Bootcamp</h4>
            <p>
              <strong>Goal:</strong>Build muscle, strength, and stamina
            </p>
            <p>
              <strong>Features:</strong>
              <ul>
                <li>Weight training + resistance circuits</li>
                <li>Progressive overload tracking</li>
                <li>Recovery & mobility sessions</li>
              </ul>
            </p>
          </div>
          <div>
            <h4>3. Zumba Fat-Blast Bootcamp</h4>
            <p>
              <strong>Goal:</strong>Burn calories, and enjoy full-body dance workouts
            </p>
            <p>
              <strong>Features:</strong>
              <ul>
                <li>High-energy Zumba dance sessions</li>
                <li>Latin-inspired music and movements</li>
                <li>Enhances mood, stamina, and coordination</li>
              </ul>
            </p>
          </div>
          <div>
            <h4>4. Yoga for Balance Bootcamp</h4>
            <p>
              <strong>Goal:</strong> Enhance flexibility, reduce stress, and
              improve mental clarity
            </p>
            <p>
              <strong>Features:</strong>
              <ul>
                <li>Daily yoga and mindfulness sessions</li>
                <li>Light posture correction and stretching</li>
                <li>Guided breathing and meditation practices</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
