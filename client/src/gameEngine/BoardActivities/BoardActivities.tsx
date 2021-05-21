import React, { useEffect } from "react";

import "./boardActivities.css";
export const BoardActivities = ({ eventsLogs }: string[]): JSX.Element => {
    useEffect(() => {}, [eventsLogs]);
    return (
        <div className="eventLog">
            <h2>Event Log</h2>

            {eventsLogs &&
                eventsLogs.map((log: string, index: number) => (
                    <div key={index}>
                        <p>{log}</p>
                    </div>
                ))}
        </div>
    );
};
