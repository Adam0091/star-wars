import { useState } from "react";
import ErrorMessage from "@components/ErrorMessage/ErrorMessage";

export const withErrorApi = View => {
    return props => {
        const [errorApi, setErrorApi] = useState(null);

        return (
            <>
                {errorApi 
                    ? <ErrorMessage />
                    : (
                        <>
                            <View 
                                setErrorApi={setErrorApi}
                                {...props} 
                            />
                        </>
                    )
                }
            </>
        );
    }
}