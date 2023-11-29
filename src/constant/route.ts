import Blog from "../pages/Blog"
import BlogDetail from "../pages/BlogDetail"
import ContactUs from "../pages/ContactUs"
import FAQ from "../pages/FAQ"
import HomePage from "../pages/HomePage"
import Pricing from "../pages/Pricing"
import PrivacyPolicy from "../pages/PrivacyPolicy"
import SignIn from "../pages/SIgnIn"
import SignUp from "../pages/SignUp"
import TermsAndCondition from "../pages/TermsAndCondtion"

export const ROUTES = {
    SIGN_IN: "/signIn",
    SIGN_UP: "/signUp",
    CONTACT_US: "/contactUs/:userType",
    HOMEPAGE: "/",
    PRICING: "/pricing",
    FAQ: "/faq",
    BLOG: "/blog",
    BLOG_DETAIL: "/blogDetail",
    TERMSANDCONDITION: "/termsAndCondition",
    PRIVACY_POLICY: "/privacyPolicy",
}

export const ROUTE_LIST = [
    { link: ROUTES.SIGN_IN, element: SignIn, isHeader: false },
    { link: ROUTES.SIGN_UP, element: SignUp, isHeader: false },
    { link: ROUTES.HOMEPAGE, element: HomePage },
    { link: ROUTES.CONTACT_US, element: ContactUs, isHeader: false },
    { link: ROUTES.PRICING, element: Pricing },
    { link: ROUTES.FAQ, element: FAQ },
    { link: ROUTES.BLOG, element: Blog },
    { link: ROUTES.BLOG_DETAIL, element: BlogDetail },
    { link: ROUTES.TERMSANDCONDITION, element: TermsAndCondition },
    { link: ROUTES.PRIVACY_POLICY, element: PrivacyPolicy },
]