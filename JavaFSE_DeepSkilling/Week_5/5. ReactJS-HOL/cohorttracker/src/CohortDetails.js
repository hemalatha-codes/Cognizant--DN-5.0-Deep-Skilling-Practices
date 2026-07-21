import React from 'react';
import styles from './CohortDetails.module.css'; // Make sure the path matches your CSS module file

function CohortDetails(props) {
  // Let's log the props to see exactly what fields the lab template is using!
  console.log("Cohort props received:", props);

  // Safely extract the data. We fallback to props.cohort or props directly depending on how the lab structured it.
  const data = props.cohort || props;
  
  // Destructure the properties. If a property name is missing, we give it a default fallback string.
  const title = data.title || data.cohortName || "Unknown Cohort";
  const startDate = data.startDate || data.startOn || "";
  const status = data.status || data.currentStatus || "";
  const coach = data.coach || "";
  const trainer = data.trainer || "";

  // Safe check: If status exists, convert to lower case; otherwise check if data.currentStatus is 'Ongoing'
  const isOngoing = (status && status.toLowerCase() === 'ongoing') || 
                    (data.currentStatus && data.currentStatus.toLowerCase() === 'ongoing');

  const headingColor = isOngoing ? 'green' : 'blue';

  return (
    <div className={styles.box}>
      <h3 style={{ color: headingColor }}>
        {title}
      </h3>
      <dl>
        <dt>Started On</dt>[cite: 3]
        <dd>{startDate}</dd>
        
        <dt>Current Status</dt>[cite: 3]
        <dd>{status || data.currentStatus}</dd>
        
        <dt>Coach</dt>[cite: 3]
        <dd>{coach}</dd>
        
        <dt>Trainer</dt>[cite: 3]
        <dd>{trainer}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;