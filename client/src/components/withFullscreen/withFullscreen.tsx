import React, {
    Fragment,
    useCallback,
    useState,
    createRef,
    useEffect,
} from "react";
import classNames from "classnames";

import enterfullscreen from "../../assets/icons/enterfullscreen.svg";
import exitfullscreen from "../../assets/icons/exitfullscreen.svg";
import "./withFullscreen.css";

export const withFullscreen = (
    Component: React.ComponentType,
    togglerClassName?: string
) => {
    return ({ ...props }) => {
        const [isFull, setIsFull] = useState(false);
        const overlayRef = createRef<HTMLDivElement>();

        useEffect(() => {
            if (document.onfullscreenchange === null) {
                document.onfullscreenchange = () => {
                    if (document.fullscreenElement === overlayRef.current) {
                        setIsFull(true);
                    } else {
                        setIsFull(false);
                    }
                };
            }

            return () => {
                document.onfullscreenchange = null;
            };
        });

        const onTogglerClick = useCallback(() => {
            if (isFull) {
                document.exitFullscreen();
            } else {
                overlayRef.current?.requestFullscreen();
            }
        }, [isFull]);

        const togglerClassNames = classNames(
            "fullscreen__toggler-container",
            togglerClassName
        );

        return (
            <div ref={overlayRef} className="fullscreen">
                <Component {...props}></Component>
                <div className={togglerClassNames} onClick={onTogglerClick}>
                    {isFull ? (
                        <img
                            className="fullscreen__toggler"
                            src={exitfullscreen}
                        />
                    ) : (
                        <img
                            className="fullscreen__toggler"
                            src={enterfullscreen}
                        />
                    )}
                </div>
            </div>
        );
    };
};
