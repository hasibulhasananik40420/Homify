import { createBrowserRouter } from "react-router-dom"
import HomePage from "../Pages/HomePage/HomePage"
import Main from "../Main/Main"
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage"
import Login from "../AuthPage/Login/Login"
import SignUp from "../AuthPage/SignUp/SignUp"
import AgentsList from "../Pages/AgentsList/AgentsList"
import AgentsDetails from "../Pages/AgentsDetails/AgentsDetails"
import PropertyList from "../Pages/PropertyList/PropertyList"
import AboutPage from "../Pages/AboutPage/AboutPage"
import PropertyDetails from "../Pages/PropertyDetails/PropertyDetails"
import ContactUsPage from "../Pages/ContactUsPage/ContactUsPage"
import BlogsDetails from "../Pages/BlogsDetails/BlogsDetails"
import AddProperty from "../Pages/AddProperty/AddProperty"
import BlogPage from "../Pages/BlogPage/BlogPage"


const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },  
            
            {
                path: "/about-us",
                element: <AboutPage />
            },
             {
                path: "/contact-us",
                element: <ContactUsPage />
            }, 

             {
                path: "/blog",
                element: <BlogPage />
            }, 
 {
                path: "/blog-details",
                element: <BlogsDetails />
            }, 

            
             {
                path: "/property-list",
                element: <PropertyList />
            },
            {
                path: "/property-details",
                element: <PropertyDetails />
            },
             {
                path: "/add-property",
                element: <AddProperty />
            }, 
             {
                path: "/agents-list",
                element: <AgentsList />
            }, 
             {
                path: "/agent-details",
                element: <AgentsDetails />
            }, 
            {
                path: "/login",
                element: <Login />
            },
            
            {
                path: "/sign-up",
                element: <SignUp />
            },
           {
                path: "*",
                element: <NotFoundPage />
            },
          


        ]

    }
])


export default routes