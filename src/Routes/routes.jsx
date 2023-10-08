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
import BlogVersionTwo from "../Pages/BlogPage/BlogVersionTwo"
import AgentsListVersionTwo from "../Pages/AgentsList/AgentsListVersionTwo"
import PropertyListTwo from "../Pages/PropertyList/PropertyListTwo"
import HomeTwo from "../Pages/HomeTwo/HomeTwo"


const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <NotFoundPage/>,
        children: [
            {
                path: "/",
                element: <HomePage />
            }, {
                path: "/home-two",
                element: <HomeTwo />
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
                path: "/blogs",
                element: <BlogPage />
            },   {
                path: "/blogs-v2",
                element: <BlogVersionTwo />
            }, 
              {
                path: "/blog-details",
                element: <BlogsDetails />
            }, 

            
             {
                path: "/property-grid",
                element: <PropertyList />
            }, {
                path: "/property-grid-two",
                element: <PropertyListTwo />
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
            },{
                path: "/agents-list-two",
                element: <AgentsListVersionTwo />
            }, 
             {
                path: "/agents-details",
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
        ]

    }
])


export default routes