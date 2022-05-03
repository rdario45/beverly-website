const withHttpWrapper = (promise, onSuccess, onFailure, dispatch) => {

    console.log("http");

    promise.then(response => {

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