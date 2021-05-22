import React, { useState } from "react";
import { useHistory } from "react-router";
import InfoLine from "../../components/infoLine";
import LeftsideButton from "../../components/leftsideButton";
import Title from "../../components/title";
import Modal from "../../components/modal";
import Button from "../../components/button";

import "../../css/info-page.css";
import "./scoreDashboard.css";

const scoreData = [
    {
        name: "Kripparian",
        results: 1105,
    },
    {
        name: "TrumpSC",
        results: 763,
    },
    {
        name: "Kibler",
        results: 444,
    },
    {
        name: "RDU",
        results: 356,
    },
    {
        name: "Thijs",
        results: 355,
    },
    {
        name: "SilverName",
        results: 297,
    },
    {
        name: "Dog",
        results: 183,
    },
    {
        name: "Firebat",
        results: 101,
    },
    {
        name: "Shadybunny",
        results: 54,
    },
    {
        name: "H3ll0W0R1D",
        results: 1,
    },
];

const scoreList = scoreData.map((item, idx) => {
    let name = "";
    const value = `${item.results}`;
    switch (idx) {
        case 0:
            name = `${idx + 1}. 🥇 ${item.name}`;
            break;
        case 1:
            name = `${idx + 1}. 🥈 ${item.name}`;
            break;
        case 2:
            name = `${idx + 1}. 🥉 ${item.name}`;
            break;
        default:
            name = `${idx + 1}. ${item.name}`;
    }

    return <InfoLine name={name} value={value} />;
});

export const ScoreDashboardPage = () => {
    const history = useHistory();

    return (
        <div className="info-page">
            <LeftsideButton onClick={() => history.push("/start")} />

            <main className="info-page__main">
                <Title text="Лучшие результаты" level={1} />

                <div className="score-dashboard">
                    <div className="score-dashboard__head">
                        <span>Имя</span>
                        <span>Число побед</span>
                    </div>
                    <div className="score-dashboard__body">{scoreList}</div>
                </div>
            </main>
        </div>
    );
};
