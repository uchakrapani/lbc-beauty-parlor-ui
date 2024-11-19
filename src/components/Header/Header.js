import React, { useState } from "react";
import {
  FaHome,
  FaUser,
  FaAddressCard,
  FaDelicious,
  FaCube,
  FaSignLanguage,
  FaUserCircle,
  FaComment,
  FaQuestion,
  FaSearch,
  FaBell,
  FaChevronDown, // For the down arrow
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Example notifications
  const notifications = [
    { user: "John Doe", message: "Added a new banner.", date: "2024-11-15" },
    { user: "Jane Smith", message: "Updated a service.", date: "2024-11-14" },
    { user: "Mark Johnson", message: "Created a new category.", date: "2024-11-13" },
  ];

  const handleBellClick = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      {/* Sidebar Menu */}
      <div className="side-menu">
        <div className="brand-name">
          <h1>
            <Link to="/dashboard">Pragathi Parlor</Link>
          </h1>
        </div>
        <ul>
          <li>
            <Link to="">
              <FaHome className="icon" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="">
              <FaUser className="icon" />
              <span>Administrator</span>
            </Link>
          </li>
          <li>
            <Link to="">
              <FaAddressCard className="icon" />
              <span>Application</span>
            </Link>
          </li>
          <li>
            <Link to="">
              <FaDelicious className="icon" />
              <span>Banners</span>
            </Link>
          </li>
          <li>
            <Link to="">
              <FaCube className="icon" />
              <span>Category</span>
            </Link>
          </li>
          <li>
            <Link to="">
              <FaSignLanguage className="icon" />
              <span>Service</span>
            </Link>
          </li>
          <li>
            <Link to="">
              <FaUserCircle className="icon" />
              <span>Users</span>
            </Link>
          </li>
          <li>
            <Link to="">
              <FaComment className="icon" />
              <span>Comments</span>
            </Link>
          </li>
          <li>
            <Link to="">
              <FaQuestion className="icon" />
              <span>Queries</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Header Container */}
      <div className="container">
        <div className="header">
          <div className="nav">
            {/* Search Section */}
            <div className="search">
              <input type="text" placeholder="Search..." />
              <button type="submit" className="btn">
                <FaSearch className="icon" />
              </button>
            </div>

            {/* User Section with Notifications and Profile Dropdown */}
            <div className="user">
              {/* Notification Bell */}
              <div className="notification" onClick={handleBellClick}>
                <FaBell className="icon" />
                {notifications.length > 0 && (
                  <div className="count">{notifications.length}</div>
                )}
              </div>

              {/* Notification Dropdown */}
              {isNotificationOpen && (
                <div className="notification-dropdown">
                  <ul>
                    {notifications.slice(0, 3).map((notif, index) => (
                      <li className="notification-item" key={index}>
                        <p>
                          <strong>{notif.user}</strong>: {notif.message}
                        </p>
                        <span>{notif.date}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/notifications" className="view-all">
                    View All
                  </Link>
                </div>
              )}

              {/* User Profile Section */}
              <div className="user-profile" onClick={toggleDropdown}>
                <span>Welcome, UserName</span>
                <FaUserCircle className="icon" />
                <FaChevronDown className="icon" />
              </div>

              {/* Profile and Logout Dropdown */}
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  <ul>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
