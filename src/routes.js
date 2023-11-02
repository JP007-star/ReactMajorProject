import { AddStudent } from "./containers/AddStudent";
import { Home } from "./containers/Home";

const routes=[
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/addStudent",
        element:<AddStudent/>
    }
]


export default routes;