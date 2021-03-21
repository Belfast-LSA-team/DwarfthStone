import React from "react";
import { Link } from "react-router-dom";

import "./page404.css";

type Page500Props = {
    message: string;
};

export const Page404: React.FC<Page500Props> = ({ message }) => {
    return (
        <div className="main">
            <div className="main-content">
                <div className="main-content__title">
                    <svg
                        width="208"
                        height="88"
                        viewBox="0 0 208 88"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M46.24 1.99999C47.76 1.99999 48.52 5.31999 48.52 11.96C48.52 14.04 48.32 16.52 47.92 19.4C47.6 22.2 46.96 23.6 46 23.6H22.6L22.48 32.36H26.44C35 32.36 41.36 34.84 45.52 39.8C49.76 44.76 51.88 51.32 51.88 59.48C51.88 67.64 49 74.32 43.24 79.52C37.48 84.64 30.08 87.2 21.04 87.2C12 87.2 5.4 85.92 1.24 83.36C0.6 82.32 0.28 80.72 0.28 78.56C0.28 76.32 0.6 73.2 1.24 69.2C1.88 65.12 2.76 63.08 3.88 63.08C3.96 63.08 4.2 63.24 4.6 63.56C10.28 65.88 14.6 67.04 17.56 67.04C20.6 67.04 23.08 66.24 25 64.64C27 62.96 28 60.84 28 58.28C28 51.88 24.56 48.68 17.68 48.68L7.36 48.8C6.56 48.96 5.76 48.64 4.96 47.84C4.16 46.96 3.76 45.84 3.76 44.48V6.92C3.76 3.63999 4.96 1.99999 7.36 1.99999H46.24ZM96.2097 87.2C86.2097 87.2 78.0097 83.52 71.6097 76.16C65.2897 68.8 62.1297 58.04 62.1297 43.88C62.1297 29.72 65.3297 19.04 71.7297 11.84C78.1297 4.55999 86.3697 0.919994 96.4497 0.919994C106.61 0.919994 114.81 4.52 121.05 11.72C127.29 18.92 130.41 29.76 130.41 44.24C130.41 58.72 127.21 69.52 120.81 76.64C114.49 83.68 106.29 87.2 96.2097 87.2ZM96.2097 23.96C93.1697 23.96 90.5697 25.72 88.4097 29.24C86.3297 32.68 85.2897 37.6 85.2897 44C85.2897 50.4 86.2897 55.32 88.2897 58.76C90.3697 62.12 93.0097 63.8 96.2097 63.8C99.4897 63.8 102.13 62.08 104.13 58.64C106.21 55.2 107.25 50.28 107.25 43.88C107.25 37.48 106.17 32.56 104.01 29.12C101.93 25.68 99.3297 23.96 96.2097 23.96ZM172.85 87.2C162.85 87.2 154.65 83.52 148.25 76.16C141.93 68.8 138.77 58.04 138.77 43.88C138.77 29.72 141.97 19.04 148.37 11.84C154.77 4.55999 163.01 0.919994 173.09 0.919994C183.25 0.919994 191.45 4.52 197.69 11.72C203.93 18.92 207.05 29.76 207.05 44.24C207.05 58.72 203.85 69.52 197.45 76.64C191.13 83.68 182.93 87.2 172.85 87.2ZM172.85 23.96C169.81 23.96 167.21 25.72 165.05 29.24C162.97 32.68 161.93 37.6 161.93 44C161.93 50.4 162.93 55.32 164.93 58.76C167.01 62.12 169.65 63.8 172.85 63.8C176.13 63.8 178.77 62.08 180.77 58.64C182.85 55.2 183.89 50.28 183.89 43.88C183.89 37.48 182.81 32.56 180.65 29.12C178.57 25.68 175.97 23.96 172.85 23.96Z"
                            fill="#FCBC5D"
                        />
                    </svg>
                </div>
                <div className="main-content__description">
                    <p>Cтраница не найдена</p>
                </div>
                <div className="main-content__button-home">
                    <Link to="/">Вернуться на главную</Link>
                </div>
            </div>
        </div>
    );
};
