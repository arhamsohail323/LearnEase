import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Layout from "../layout/Index";
import Customer from "../pages/Customer";
import Dashboard from "../pages/dashboard/Index";
import Clients from "../pages/clients/Index";
import Invoices from "../pages/invoices/Index";
import AddClient from "../pages/clients/AddClient";
import AddInvoice from "../pages/invoices/AddInvoice";
import InvoiceDetails from "../pages/invoices/InvoiceDetails";
import Career from "../pages/Career";
import Assignment from "../pages/Assignment";
import AddAssignments from "../pages/Assignment/AddAssignments";
import Resources from "../pages/Resources";
import Notes from "../pages/Notes";
import AddNotes from "../pages/Notes/AddNotes";
import Books from "../pages/Books";
import AddBooks from "../pages/Books/AddBooks";
import ComingSoon from "../pages/Learning/ComingSoon";
import Login from "../pages/login";
import BlogPost from "../pages/BlogPost";
import AddBlog from "../pages/BlogPost/AddBlog";
import AllConsultant from "../pages/MainPage/AllConsultant";
import Navbars from "../pages/MainPage/Navbars";
import Footer from "../pages/MainPage/Footer";
import Navbar from "../pages/MainPage/Navbar";
import SingleConsultant from "../pages/MainPage/SingleCpnsultant";
import SignUp from "../pages/signup";
import Forget from "../pages/Forget";
import Consultant from "../pages/MainPage/Consultant";
// import Forget from "../pages/Forget";
const Routers = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/career"
          element={
            <Layout>
              <Career />
            </Layout>
          }
        />
        <Route
          path="/clients"
          element={
            <Layout>
              <Clients />
            </Layout>
          }
        />




        <Route
          path="/resources"
          element={
            <Layout>
              <Resources />
            </Layout>
          }
        />
        <Route
          path="/resources/assignments"
          element={
            <Layout>
              <Assignment />
            </Layout>
          }
        />

        <Route
          path="/resources/assignments/addassignments"
          element={
            <Layout>
              <AddAssignments />
            </Layout>
          }
        />

        <Route
          path="/resources/lectures"
          element={
            <Layout>
              <Notes />
            </Layout>
          }
        />
        <Route
          path="/resources/lectures/addlecturesnotes"
          element={
            <Layout>
              <AddNotes />
            </Layout>
          }
        />
        <Route
          path="/resources/marketplace"
          element={
            <Layout>
              <Books />
            </Layout>
          }
        />

        <Route
          path="/resources/marketplace/addbooksmarketplace"
          element={
            <Layout>
              <AddBooks />
            </Layout>
          }
        />


        <Route
          path="/learning"
          element={
            <Layout>
              <ComingSoon />
            </Layout>
          }
        />
        <Route
          path="/admin/login"
          element={
            <Login />

          }
        />
        <Route
          path="/admin/signup"
          element={
            <SignUp />
          }
        />

        <Route
          path="/admin/forget"
          element={
            <Forget />

          }
        />



        <Route
          path="/blog"
          element={
            <Layout>
              <BlogPost />
            </Layout>
          }
        />

        <Route
          path="/consultants"
          element={
            <>

              <Navbars />
              <AllConsultant />
              <Footer />
            </>
          }
        />
        <Route
          path="/blogs/main"
          element={
            <>
              <Navbars />
              <ComingSoon />
              <Footer />
            </>
          }
        />


        <Route
          path="/consultant/:id"
          element={
            <>

              <Navbars />
              <Consultant />
              <Footer />
            </>
          }
        />


        <Route
          path="/"
          element={
            <>
              <Navbar />
            </>
          }
        />
        <Route
          path="/singleconsultant"
          element={
            <>
              <SingleConsultant />
            </>
          }
        />

        <Route
          path="/blog/blogpost"
          element={
            <Layout>
              <AddBlog />
            </Layout>
          }
        />


        <Route
          path="/clients/addclient"
          element={
            <Layout>
              <AddClient />
            </Layout>
          }
        />
        <Route
          path="/invoices"
          element={
            <Layout>
              <Invoices />
            </Layout>
          }
        />
        <Route
          path="/invoices/addinvoice"
          element={
            <Layout>
              <AddInvoice />
            </Layout>
          }
        />
        <Route
          path="/invoices/invoicedetails"
          element={
            <Layout>
              <InvoiceDetails />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
