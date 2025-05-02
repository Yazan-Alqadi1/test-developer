export const useHandelError = () => {
    const handelErrorType = (error) => {
        if (error.response) {
            // console.log(error);
            if (error.response.status == 400) {
                if (error.response.data?.errors?.date)
                    return error.response.data;
                else 
                    return "Something went wrong";
            }
            if (error.response.status == 401) {
                return "Unauthorized";
            }
            else if (error.response.status == 403) {
                return "Forbidden";
            }
            else if (error.response.status == 404) {
                return "Data Not Found";
            }
            else if (error.response.status >= 500) {
                return "Server out";
            }
            else {
                return error.response.data.error;
            }
        } else if (error.request) {
            // console.log('Request Error:', error.request);
            return "Bad network, check your internet";
        } else {
            // console.log('Error:', error.message);
            return "Something went wrong";
        }
    }

    return {
        handelErrorType,
    }
}