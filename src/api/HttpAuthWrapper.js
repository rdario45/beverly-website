const withHttpWrapper = (promise, onSuccess, onFailure, dispatch) => {

    promise.then(response => {

        console.log("response.status", response.status )
        if (response.status === 200) {

            response.json().then(body => {

                onSuccess(Object.assign(body));
            
            });

        } else {

            onFailure(response);

            if (response.status === 401) {

                dispatch({
                    type: "logout",
                    payload: true
                });

            }

        }

    });
}

export { withHttpWrapper };