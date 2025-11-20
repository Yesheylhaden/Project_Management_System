import React, { useState } from "react";
import { Edit3, Mail, Phone, MapPin, Briefcase, Calendar } from "lucide-react";
import SideBar from "../components/FD_Sidebar";

export default function MyProfile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Yeshey Lhaden",
    email: "ylhaden1437@gmail.com",
    phone: "+975 77406930",
    location: "Choekhorling, Sarpang, Bhutan",
    birthdate: "30 Oct 2004",
    college: "College of Science and Technology (CST)",
    about:
      "I’m a passionate software engineering student who loves building interactive web applications and exploring UI/UX design. My interests include working with React, TypeScript, and databases. I enjoy teamwork, problem-solving, and constantly learning new technologies to enhance my projects.",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
  };

  return (
    <div className="flex min-h-screen bg-[#E6F3FF]">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">My Profile</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100"
          >
            <Edit3 className="w-4 h-4" /> Edit Profile
          </button>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-xl shadow-md p-6 max-w-3xl">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Profile Picture */}
            <div className="w-28 h-28 rounded-full bg-blue-200 flex items-center justify-center text-3xl font-semibold text-blue-800">
              {profileData.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>

            {/* Profile Info */}
            <div className="flex-1 space-y-3">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {profileData.name}
                </h2>
                <p className="text-gray-500">Software Engineering Student</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail className="w-5 h-5 text-blue-500" />
                  <span>{profileData.email}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone className="w-5 h-5 text-blue-500" />
                  <span>{profileData.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  <span>{profileData.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-5 h-5 text-blue-500" />
                  <span>Born: {profileData.birthdate}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-gray-600 mt-2">
                <Briefcase className="w-5 h-5 text-blue-500" />
                <span>{profileData.college}</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="my-6 border-gray-200" />

          {/* Extra Details */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">
              About Me
            </h3>
            <p className="text-gray-600 leading-relaxed">{profileData.about}</p>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">
              Edit Profile
            </h2>
            <form onSubmit={handleSave} className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={profileData.name}
                  onChange={handleChange}
                  className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-100 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleChange}
                  className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-100 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  value={profileData.phone}
                  onChange={handleChange}
                  className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-100 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={profileData.location}
                  onChange={handleChange}
                  className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-100 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600">
                  About
                </label>
                <textarea
                  name="about"
                  rows="3"
                  value={profileData.about}
                  onChange={handleChange}
                  className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-100 outline-none resize-none"
                />
              </div>

              <div className="flex justify-end gap-3 mt-5">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
