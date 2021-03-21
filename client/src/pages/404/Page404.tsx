import React from "react";
import { Link } from "react-router-dom";

import "./page404.css";

type Page404Props = {
    message: string;
};

export const Page404: React.FC<Page404Props> = ({ message }) => {
    return (
        <div className="main">
            <div className="main-content">
                <div className="main-content__title">
                    <svg
                        width="215"
                        height="88"
                        viewBox="0 0 215 88"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M64.64 50.12C65.44 50.12 65.84 53.16 65.84 59.24C65.84 65.24 65.44 68.24 64.64 68.24L56.72 68.36V83.48C56.72 84.36 55.08 85 51.8 85.4C48.52 85.8 45.68 86 43.28 86L38.36 85.76C34.28 85.44 32.24 84.72 32.24 83.6V68.72H8.36C6.28 66.64 4.4 63.96 2.72 60.68C1.04 57.32 0.2 54.92 0.2 53.48C0.2 51.96 0.44 50.76 0.92 49.88L27.2 3.32C27.52 2.68 29.96 2.2 34.52 1.88C39.16 1.56 44 1.39999 49.04 1.39999C54.08 1.39999 56.6 1.59999 56.6 1.99999L56.72 50.12H64.64ZM35.72 50.24V25.16L21.68 50.24H35.72ZM108.999 87.2C98.9988 87.2 90.7988 83.52 84.3988 76.16C78.0788 68.8 74.9188 58.04 74.9188 43.88C74.9188 29.72 78.1188 19.04 84.5188 11.84C90.9188 4.55999 99.1588 0.919994 109.239 0.919994C119.399 0.919994 127.599 4.52 133.839 11.72C140.079 18.92 143.199 29.76 143.199 44.24C143.199 58.72 139.999 69.52 133.599 76.64C127.279 83.68 119.079 87.2 108.999 87.2ZM108.999 23.96C105.959 23.96 103.359 25.72 101.199 29.24C99.1188 32.68 98.0788 37.6 98.0788 44C98.0788 50.4 99.0788 55.32 101.079 58.76C103.159 62.12 105.799 63.8 108.999 63.8C112.279 63.8 114.919 62.08 116.919 58.64C118.999 55.2 120.039 50.28 120.039 43.88C120.039 37.48 118.959 32.56 116.799 29.12C114.719 25.68 112.119 23.96 108.999 23.96ZM212.999 50.12C213.799 50.12 214.199 53.16 214.199 59.24C214.199 65.24 213.799 68.24 212.999 68.24L205.079 68.36V83.48C205.079 84.36 203.439 85 200.159 85.4C196.879 85.8 194.039 86 191.639 86L186.719 85.76C182.639 85.44 180.599 84.72 180.599 83.6V68.72H156.719C154.639 66.64 152.759 63.96 151.079 60.68C149.399 57.32 148.559 54.92 148.559 53.48C148.559 51.96 148.799 50.76 149.279 49.88L175.559 3.32C175.879 2.68 178.319 2.2 182.879 1.88C187.519 1.56 192.359 1.39999 197.399 1.39999C202.439 1.39999 204.959 1.59999 204.959 1.99999L205.079 50.12H212.999ZM184.079 50.24V25.16L170.039 50.24H184.079Z"
                            fill="#FCBC5D"
                        />
                    </svg>
                </div>
                <div className="main-content__description">
                    <p>{message}</p>
                </div>
                <div className="main-content__button-home">
                    <Link to="/">Вернуться на главную</Link>
                </div>
            </div>
        </div>
    );
};
