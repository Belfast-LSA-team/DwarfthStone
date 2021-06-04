import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import type { State } from "../../redux/reducers";
import type { ConnectedThunk } from "../../redux/thunks";
import { fetchServiceIdThunk } from "../../redux/thunks/user";
import { getServiceId } from "../../redux/selectors/widgets/user";
import { REDIRECT_URI } from "../../constants";
import Button from "../button";

function getOAuthLink(clinedId: string | null, redirectUri: string) {
    return `https://oauth.yandex.ru/authorize?response_type=code&client_id=${clinedId}&redirect_uri=${redirectUri}`;
}

type YandexOAuthProps = {
    fetchServiceIdThunk: ConnectedThunk<typeof fetchServiceIdThunk>;
    serviceId: string | null;
};

export const YandexOAuth = ({
    serviceId,
    fetchServiceIdThunk,
}: YandexOAuthProps) => {
    const [OAuthLink, setOAuthLink] = useState<string | undefined>();

    useEffect(() => {
        fetchServiceIdThunk(REDIRECT_URI);
    }, []);

    useEffect(() => {
        setOAuthLink(getOAuthLink(serviceId, REDIRECT_URI));
    }, [serviceId]);

    return (
        <Button
            className="page__btn"
            type="submit"
            style="primary"
            stretch={true}
            clickHandler={() => {
                if (OAuthLink) {
                    document.location.href = OAuthLink;
                }
            }}
        >
            Войти через ЯндексID
        </Button>
    );
};

const mapStateToProps = (state: State) => ({
    serviceId: getServiceId(state),
});

export default connect(mapStateToProps, {
    fetchServiceIdThunk,
})(YandexOAuth);
