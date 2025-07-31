import { BrowserRouter } from "react-router";
import { ManagerRoutes } from "./ManagerRoutes";
import { AuthRoutes } from "./AuthRoutes";
import { RefundEmployee } from "./EmployeeRoutes";
import { Loading } from "../components/Loading";

const isLoading = false

const session = {
    user: {
        role: "manager"
    }
}


export function Routes() {


    function Route() {

        switch (session?.user.role) {
            case "employee":

                return <RefundEmployee />;

            case "manager":

                return <ManagerRoutes />;

            default:
                return <AuthRoutes />;
        }
    }


    if (isLoading) {
        return <Loading />
    }
    return (
        <BrowserRouter >
            <Route />
        </BrowserRouter >


    )
}