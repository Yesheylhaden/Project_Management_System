import React from "react";
import { Edit3, Mail, Phone, MapPin, Briefcase, Calendar } from "lucide-react";
import SideBar from "../components/Sidebar";

export default function MyProfile() {
  return (
    <div className="flex min-h-screen bg-[#E6F3FF]">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">My Profile</h1>
          <button className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100">
            <Edit3 className="w-4 h-4" /> Edit Profile
          </button>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-xl shadow-md p-6 max-w-3xl">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Profile Picture */}
            <div className="w-28 h-28 rounded-full bg-blue-200 flex items-center justify-center text-3xl font-semibold text-blue-800">
              YL
            </div>

            {/* Profile Info */}
            <div className="flex-1 space-y-3">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Yeshey Lhaden
                </h2>
                <p className="text-gray-500">Software Engineering Student</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail className="w-5 h-5 text-blue-500" />
                  <span>ylhaden1437@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone className="w-5 h-5 text-blue-500" />
                  <span>+975 77406930</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  <span>Choekhorling, Sarpang, Bhutan</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-5 h-5 text-blue-500" />
                  <span>Born: 30 Oct 2004</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-gray-600 mt-2">
                <Briefcase className="w-5 h-5 text-blue-500" />
                <span>College of Science and Technology (CST)</span>
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
            <p className="text-gray-600 leading-relaxed">
              I’m a passionate software engineering student who loves building
              interactive web applications and exploring UI/UX design. My
              interests include working with React, TypeScript, and databases.
              I enjoy teamwork, problem-solving, and constantly learning new
              technologies to enhance my projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
