import { NavLink, Outlet } from "react-router-dom";
import { FaBars, FaHome,FaUser,FaUserPlus,FaDatabase,FaSignOutAlt } from "react-icons/fa";
import { AiTwotoneFileExclamation } from "react-icons/ai";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";

const routes = [
  {
    path: "AdminDesk",
    name: "AdminDesk",
    icon: <FaHome />,
  },
  {
    path: "Course",
    name: "Course",
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "AddCourse",
        name: "AddCourse ",
        icon: <FaUserPlus />,
      },
      {
        path: "ShowCourse",
        name: "ShowCourse",
        icon: <FaBars />,
      },
    ],
  },
  {
    path: "Subject",
    name: "Subject",
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "AddSubject",
        name: "AddSubject ",
        icon: <FaUserPlus />,
      },
      {
        path: "ShowSubject",
        name: "ShowSubject",
        icon: <FaBars />,
      },
    ],
  },
  {
    path: "Faculty",
    name: "Faculty",
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "AddFaculty",
        name: "AddFaculty ",
        icon: <FaUserPlus />,
      },
      {
        path: "ShowFaculty",
        name: "ShowFaculty",
        icon: <FaBars />,
      },
    ],
  },
  {
    path: "Student",
    name: "Student",
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "AddStudent",
        name: "AddStudent ",
        icon: <FaUserPlus />,
      },
      {
        path: "ShowStudent",
        name: "ShowStudent",
        icon: <FaBars />,
      },
    ],
  },
  {
    path: "AddPackage",
    name: "AddPackage",
    icon: <FaUserPlus />,
  },
  {
    path: "Logout",
    name: "Logout",
    icon: <FaSignOutAlt />,
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  AdminDesk
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}<Outlet/></main>
      </div>
      
    </>
  );
};

export default SideBar;
