
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importing routing components
import React, { useState } from 'react'; // Importing useState
import Navbar from './components/Navbar';

import Carousel from './components/Carousel';
import Category from './components/Category';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Fruits from './components/Fruits';
import CartPage from './components/CartPage';
import ProfilePage from './components/ProfilePage';
import Vegetables from './components/Vegetables';
import DairyProducts from './components/DairyProducts';
import BakeryItems from './components/BakeryItems';
import Beverages from './components/Beverages';
import Snacks from './components/Snacks';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import ClientReviewPage from './components/ClientReviewPage';
import HouseholdEssentials from './components/HouseholdEssentials';
import CleaningNeeds from './components/CleaningNeeds';
import MensGrooming from './components/MensGrooming';
import CreamsLotions from './components/CreamsandLotions';
import HealthCare from './components/HealthCare';
import BabyCare from './components/BabyCare';
import PersonalCare from './components/PersonalCare';
import ReadyToCook from './components/ReadyTocook';
import FeminineCare from './components/FeminineCare';
import OralCare from './components/OralCare';
import Crockeries from './components/Crockeries';
import ReadyToEat from './components/ReadyToEat';
import Services from './components/Services';
import Checkout from './components/Checkout';
import ThankYou from './components/ThankYou';
import AdminDashboard from './components/AdminDashboard';
import PrivacyPolicy from './components/PrivacyPolicy';
import ErrorPage from './components/ErrorPage';
import TermsandConditions from './components/TermsandCondtions';
import FAQ from './components/FAQ';
import ManageProducts from './components/ManageProducts';
import ManageUsers from './components/ManageUsers';
import Reports from './components/Reports';








function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Router>
      {/* Pass searchQuery and handleSearch to Navbar */}
      <Navbar onSearch={handleSearch} searchQuery={searchQuery} />

      {/* Define the routes here */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page route */}
        <Route path="/category" element={<Category searchQuery={searchQuery} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/fruits" element={<Fruits />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/vegetables" element={<Vegetables/>} />
        <Route path="/dairy" element={<DairyProducts />} />
        <Route path="/bakery" element={<BakeryItems />} />
        <Route path="/beverages" element={<Beverages />} />
        <Route path="/snacks" element={<Snacks/>} />
        <Route path="/householdessentials" element={<HouseholdEssentials/>} />
        <Route path="/cleaningneeds" element={<CleaningNeeds />} />
         <Route path="/mensgrooming" element={<MensGrooming />} />
        <Route path="/creamsandlotions" element={<CreamsLotions />} />
        <Route path="/healthcare" element={<HealthCare />} />
        <Route path="/babycare" element={<BabyCare />} />
        <Route path="/personalcare" element={<PersonalCare />} />
        <Route path="/readytocook" element={<ReadyToCook />} />
        <Route path="/femininecare" element={<FeminineCare />} />
        <Route path="/oralcare" element={<OralCare />} />
       <Route path='/crockeries' element={<Crockeries></Crockeries>}></Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signuppage" element={<SignUpPage />} />
        <Route path="/review" element={<ClientReviewPage />} />
        <Route path="/readytoeat" element={<ReadyToEat />} />
        <Route path="/services" element={<Services />} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/thankyou" element={<ThankYou/>} />
        <Route path="/admin" element={<AdminDashboard/>} />
        <Route path="/privacy" element={<PrivacyPolicy/>} />
        <Route path="/terms" element={<TermsandConditions/>} />
        <Route path="/faq" element={<FAQ/>} />
        <Route path="*" element={<ErrorPage/>} />
        <Route path="admin/products" element={<ManageProducts/>} />
        <Route path="admin/users" element={<ManageUsers/>} />
        <Route path="admin/reports" element={<Reports/>} />

      </Routes>

      {/* Footer will appear on all pages */}
      <Footer />
    </Router>
  );
}

export default App;
