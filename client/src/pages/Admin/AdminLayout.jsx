import { Outlet } from "react-router-dom";
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import AdminFooter from "../../components/AdminFooter/AdminFooter";

function AdminLayout() {
  return (
    <>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <AdminHeader />
        <main style={{ flex: 1 }}>
          <Outlet />
        </main>
        <AdminFooter />
      </div>
    </>
  );
}

export default AdminLayout;
