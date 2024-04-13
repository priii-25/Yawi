import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Menstrual.css";

const Menstrual = () => {
  const [cycles, setCycles] = useState([
    { startDate: null, endDate: null },
    { startDate: null, endDate: null },
    { startDate: null, endDate: null },
  ]);
  const [predictedNextCycleStartDate, setPredictedNextCycleStartDate] = useState(null);

  const handleStartDateChange = (date, cycleIndex) => {
    const updatedCycles = [...cycles];
    updatedCycles[cycleIndex].startDate = date;
    setCycles(updatedCycles);
  };

  const handleEndDateChange = (date, cycleIndex) => {
    const updatedCycles = [...cycles];
    updatedCycles[cycleIndex].endDate = date;
    setCycles(updatedCycles);
  };

  const calculateNextCycleStartDate = () => {
    // Ensure all start and end dates are selected
    if (cycles.some(cycle => !cycle.startDate || !cycle.endDate)) {
      alert("Please select start and end dates for all cycles.");
      return;
    }

    // Sort cycles by start date
    const sortedCycles = cycles.slice().sort((a, b) => new Date(a.startDate) - new Date(b.startDate));

    // Calculate average cycle length
    const cycleLengths = sortedCycles.slice(0, 2).map((cycle, index) => {
      return (cycle.endDate - cycle.startDate) / (1000 * 60 * 60 * 24);
    });
    const avgCycleLength = cycleLengths.reduce((acc, curr) => acc + curr, 0) / cycleLengths.length;

    // Predict the start date of the next cycle
    const nextCycleStartDate = new Date(sortedCycles[2].endDate);
    nextCycleStartDate.setDate(nextCycleStartDate.getDate() + avgCycleLength);
    setPredictedNextCycleStartDate(nextCycleStartDate);
  };

  const getAdvice = (cycleLength) => {
    if (cycleLength < 4) {
      return "Your cycle length is shorter than average. Consult with a healthcare provider.";
    } else if (cycleLength <= 15) {
      return "Your cycle length is within the normal range.";
    } else {
      return "Your cycle length is longer than average. Consult with a healthcare provider.";
    }
  };

  return (
    <div  className='og'>
    <div className="calendar-container">
      <h2 className="calendar-title">Welcome to the Menstrual Cycle Predictor!</h2>
      {cycles.map((cycle, index) => (
        <div key={index} className="cycle">
          <h3 className="cycle-title">Cycle {index + 1}</h3>
          <div className="calendar">
            <div className="calendar-column">
              <h4 className="calendar-column-title">Start Date</h4>
              <Calendar onChange={(date) => handleStartDateChange(date, index)} value={cycle.startDate} />
            </div>
            <div className="calendar-column">
              <h4 className="calendar-column-title">End Date</h4>
              <Calendar onChange={(date) => handleEndDateChange(date, index)} value={cycle.endDate} />
            </div>
          </div>
          {cycle.startDate && cycle.endDate && (
            <p className="advice">
              {getAdvice((cycle.endDate - cycle.startDate) / (1000 * 60 * 60 * 24))}
            </p>
          )}
        </div>
      ))}
      <br />
      <button className="predict-button" onClick={calculateNextCycleStartDate}>Predict Next Cycle Start Date</button>
      {predictedNextCycleStartDate && (
        <div className="predicted-start-date">
          <p className="predicted-start-date-text">Based on your input, the predicted start date of your next menstrual cycle is:</p>
          <p className="predicted-start-date-value">{predictedNextCycleStartDate.toDateString()}</p>
        </div>
      )}
    </div>
    </div>
  );
};

export default Menstrual;