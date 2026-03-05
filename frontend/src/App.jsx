import { Routes, Route } from "react-router-dom";
import Overview from "./pages/Overview";

import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import Upload from "./pages/Upload";
import UploadSuccess from "./pages/UploadSuccess";
import Files from "./pages/Files";
import Download from "./pages/Download";

export default function App() {
  return (
    <Routes>

      {/* Public Routes */}
      <Route path="/" element={<Landing />} />
      <Route path="/signin" element={<SignIn />} />

      {/* Dashboard Layout (Protected Area Structure) */}
      <Route path="/dashboard" element={<Dashboard />}>

        {/* Overview Page */}
<Route index element={<Overview />} />
        {/* Upload Page */}
        <Route path="upload" element={<Upload />} />

        {/* My Files Page */}
        <Route path="files" element={<Files />} />

        {/* Uploaded Success Page */}
        <Route path="uploaded" element={<UploadSuccess />} />

        {/* Download */}
        <Route path="download/:id" element={<Download />} />

      </Route>

    </Routes>
  );
}