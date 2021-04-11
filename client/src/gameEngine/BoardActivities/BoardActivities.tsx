import React, { useEffect } from "react";

export const BoardActivities = ({ eventsLogs }: string[]): JSX.Element => {
    // console.log(eventsLogs);
    useEffect(() => {}, [eventsLogs]);
    return (
        <div className="eventLog">
            <h2>Event Log</h2>

            {eventsLogs &&
                eventsLogs.map((log: string, index: number) => (
                    <div key={index}>{log}</div>
                ))}
        </div>
    );
};
