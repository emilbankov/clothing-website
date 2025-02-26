import { useLocation, Route, Routes, Navigate } from "react-router-dom";

import { CartProvider } from "./contexts/CartProvider";
import { AuthProvider } from "./contexts/AuthProvider";
import AuthGuard from "./guards/AuthGuard";
import GuestGuard from "./guards/GuestGuard";
import ErrorBoundary from "./guards/ErrorBoundary";

import Header from "./components/Header/Header";
import ScrollToTop from "./components/Scroll To Top/ScrollToTop";
import Home from "./components/Home/Home";
import Catalog from "./components/Catalog/Catalog";
import Details from "./components/Details/Details";
import ViewCart from "./components/View Cart/ViewCart";
import Checkout from "./components/Checkout/Checkout";
import AddClothing from "./components/Add Clothing/AddClothing";
import EditClothing from "./components/Edit Clothing/EditClothing";
import SearchResults from "./components/Search Results/SearchResults";
import OrdersHistory from "./components/Orders History/OrdersHistory";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Blogs from "./components/Blogs/Blogs";
import Account from "./components/Account/Account";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import ForgottenPassword from "./components/Forgotten Password/ForgottenPassword";
import ResetPassword from "./components/Reset Password/ResetPassword";
import Error404 from "./components/404/404";
import Logout from "./components/Logout/Logout";
import Footer from "./components/Footer/Footer";

function App() {
    const location = useLocation();

    return (
        <ErrorBoundary>
            <CartProvider>
                <AuthProvider>
                    <Header />

                    <ScrollToTop />

                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<Home />} />
                        <Route path="/catalog" element={<Catalog />} />
                        <Route path="/clothing/details/:clothingId" element={<Details />} />
                        <Route path="/view-cart" element={<ViewCart />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/search-results" element={<SearchResults />} />
                        <Route path="/orders-history" element={<OrdersHistory />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/blogs" element={<Blogs />} />

                        <Route element={<GuestGuard />}>
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/forgotten-password" element={<ForgottenPassword />} />
                            <Route path="/reset-password" element={<ResetPassword />} />
                        </Route>

                        <Route element={<AuthGuard />}>
                            <Route path="/account" element={<Account />} />
                            <Route path="/add-clothing" element={<AddClothing />} />
                            <Route path="/clothing/edit/:clothingId" element={<EditClothing />} />
                            <Route path="/logout" element={<Logout />} />
                        </Route>

                        <Route path="/404" element={<Navigate to="*" replace />} />
                        <Route path="*" element={<Error404 />} />
                    </Routes>

                    <Footer />
                </AuthProvider>
            </CartProvider>
        </ErrorBoundary>

    );
}

export default App;
