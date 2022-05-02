
import { MDBSpinner } from "mdb-react-ui-kit";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const RequireAuth = ({ children }) => {
    let [user, loading] = useAuthState(auth);
    let location = useLocation();

    if (loading) {
        return (
            <div className="min-height-100vh d-flex align-items-center justify-content-center">
                <MDBSpinner role='status' className='text-center'>
                    <span className='visually-hidden'>Loading...</span>
                </MDBSpinner>
            </div>
        );
    }
    if (!user) {

        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}
export default RequireAuth;