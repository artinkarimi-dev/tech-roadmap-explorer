// Table.jsx

/**
 * Roadmap table displaying technologies/skills per domain.
 * Renders differently based on selectedDomain.
 */

const Table = ({ selectedDomain }) => {
  // Hardcoded roadmap data per domain
  const allData = {
    frontend: [
      {
        id: 1,
        name: "HTML",
        description:
          "HTML is the primal syntax that breathes life into the web.",
        group: "Frontend",
        status: "Simple",
        img: "./src/assets/html.png",
      },
      {
        id: 2,
        name: "CSS",
        description:
          "CSS is the aesthetic engine that shapes the soul of the web",
        group: "Frontend",
        status: "Simple",
        img: "./src/assets/css.png",
      },
      {
        id: 3,
        name: "JavaScript",
        description:
          "JavaScript is the dynamic pulse that animates the web into motion",
        group: "Frontend",
        status: "Moderate",
        img: "./src/assets/js.png",
      },
      {
        id: 4,
        name: "React",
        description:
          "React is the declarative framework that orchestrates the web’s interactive symphony",
        group: "Frontend",
        status: "Difficult",
        img: "./src/assets/react.png",
      },
    ],
    backend: [
      {
        id: 5,
        name: "Learn a Programming Language",
        description: "Start with JavaScript for backend basics",
        group: "Backend",
        status: "Difficult",
        img: "./src/assets/js.png",
      },
      {
        id: 6,
        name: "Node.js",
        description: "Node.js runs JavaScript on the server",
        group: "Backend",
        status: "Moderate",
        img: "./src/assets/nodejs.png",
      },
      {
        id: 7,
        name: "Express.js",
        description: "Express makes building APIs simple.",
        group: "Backend",
        status: "Moderate",
        img: "./src/assets/Expressjs.png",
      },
      {
        id: 8,
        name: "Databases",
        description: "Store and manage data with databases",
        group: "Backend",
        status: "Difficult",
        img: "./src/assets/databases.png",
      },
    ],
    security: [
      {
        id: 5,
        name: "Networking Fundamentals",
        description: "Understand how computers connect and communicate",
        group: "Security",
        status: "Difficult",
        img: "./src/assets/Networking.png",
      },
      {
        id: 6,
        name: "Linux",
        description: "Learn system basics to secure and control environments",
        group: "Security",
        status: "Moderate",
        img: "./src/assets/Linux.png",
      },
      {
        id: 7,
        name: "Security Concepts",
        description: "Know threats, encryption, firewalls, and authentication",
        group: "Security",
        status: "Difficult",
        img: "./src/assets/Security.png",
      },
      {
        id: 8,
        name: "Practical Tools",
        description: "Use tools like Wireshark, Nmap, Metasploit.",
        group: "Security",
        status: "Moderate",
        img: "./src/assets/Practical.png",
      },
    ],

    ai: [
      {
        id: 5,
        name: "Mathematics Basics",
        description: "Math builds the foundation of AI",
        group: "Ai",
        status: "Moderate",
        img: "./src/assets/Mathematics.png",
      },
      {
        id: 6,
        name: "Python",
        description: "Python is the primary language of AI.",
        group: "Ai",
        status: "Moderate",
        img: "./src/assets/Python.png",
      },
      {
        id: 7,
        name: "Machine Learning Fundamentals",
        description: "Learn how models learn from data.",
        group: "Ai",
        status: "Difficult",
        img: "./src/assets/Machine.png",
      },
      {
        id: 8,
        name: "Deep Learning",
        description: "Neural networks power modern AI systems.",
        group: "Ai",
        status: "Difficult",
        img: "./src/assets/Deep.png",
      },
    ],
    devops: [
      {
        id: 5,
        name: "Linux",
        description: "Master Linux basics to control servers.",
        group: "Devops",
        status: "Moderate",
        img: "./src/assets/Linux.png",
      },
      {
        id: 6,
        name: "Networking Fundamentals",
        description: "Understand how systems communicate in infrastructure.",
        group: "Devops",
        status: "Difficult",
        img: "./src/assets/Networking.png",
      },
      {
        id: 7,
        name: "Version Control (Git)",
        description: "Use Git to track and manage code changes.",
        group: "Devops",
        status: "Moderate",
        img: "./src/assets/Git.png",
      },
      {
        id: 8,
        name: "CI/CD Pipelines",
        description: "Automate building, testing, and deploying apps",
        group: "Devops",
        status: "Moderate",
        img: "./src/assets/Pipelines.png",
      },
    ],
  };

  /**
   * Maps a group to Tailwind CSS classes for styling
   * Based on a simple color code convention per role/group
   */
  const getGroupColor = (group) => {
    const colors = {
      Developer: "bg-blue-900/40 text-blue-300 border-blue-500",
      Admin: "bg-red-900/40 text-red-300 border-red-500",
      Designer: "bg-purple-900/40 text-purple-300 border-purple-500",
      Manager: "bg-amber-900/40 text-amber-300 border-amber-500",
    };
    return colors[group] || "bg-gray-800/40 text-gray-300 border-gray-500";
  };

  /**
   * Maps status complexity to background color for visual indicator
   */
  const getStatusColor = (status) => {
    const colors = {
      Simple: "bg-emerald-400",
      Moderate: "bg-yellow-400",
      Difficult: "bg-red-400",
    };
    return colors[status] || "bg-gray-400";
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-4 mt-9">
      {/* Table container with gradient background */}
      <div className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 rounded-xl shadow-xl overflow-hidden">
        {/* Table header (hidden on mobile) */}
        <div className="hidden md:grid grid-cols-12 gap-2 px-4 py-3 bg-blue-900/60 backdrop-blur-md border-b border-blue-700 text-xs font-semibold text-blue-200">
          <div className="col-span-5">Title</div>
          <div className="col-span-4">Description</div>
          <div className="col-span-3">Complexity</div>
        </div>

        {selectedDomain && (
          <div className="divide-y divide-blue-800/60">
            {allData[selectedDomain]?.map((user) => (
              <div
                key={user.id}
                className="flex flex-col md:grid md:grid-cols-12 gap-3 px-4 py-3 hover:bg-blue-900/40 transition-colors cursor-pointer backdrop-blur-md"
              >
                {/* Title + description */}
                <div className="md:col-span-5 flex items-center">
                  <img
                    className="w-9 h-9 mr-3 flex-shrink-0 rounded-full ring-2 ring-blue-600"
                    src={user.img}
                    alt=""
                  />
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-blue-100 truncate max-w-[180px]">
                      {user.name}
                    </div>
                    <div className="text-xs text-blue-300 line-clamp-2">
                      {user.description}
                    </div>
                  </div>
                </div>

                {/* Group indicator */}
                <div className="md:col-span-4 flex items-center">
                  <div
                    className={`text-xs px-3 py-1 rounded-full border ${getGroupColor(
                      user.group
                    )}`}
                  >
                    {user.group}
                  </div>
                </div>

                {/* Status indicator */}
                <div className="md:col-span-3 flex items-center">
                  <div className="flex items-center">
                    <div
                      className={`w-2.5 h-2.5 rounded-full ${getStatusColor(
                        user.status
                      )} mr-2`}
                    ></div>
                    <span className="text-xs font-medium capitalize text-blue-200">
                      {user.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Status legend */}
      <div className="mt-4 text-center">
        <div className="inline-flex flex-wrap items-center gap-5 text-xs text-blue-300">
          <div className="flex items-center">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 mr-2"></div>
            <span>Simple</span>
          </div>
          <div className="flex items-center">
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 mr-2"></div>
            <span>Moderate</span>
          </div>
          <div className="flex items-center">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400 mr-2"></div>
            <span>Difficult</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
