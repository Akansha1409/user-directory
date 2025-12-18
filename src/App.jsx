import React, { useState, useEffect } from "react";
import UserCard from "./components/UserCard";
import UserModal from "./components/UserModal";
import AddUserForm from "./components/AddUserForm";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const savedUsers = localStorage.getItem("appUsers");
        if (savedUsers) {
          setUsers(JSON.parse(savedUsers));
          setLoading(false);
          return;
        }
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) throw new Error("Failed to fetch users");
        const data = await response.json();
        setUsers(data);
        localStorage.setItem("appUsers", JSON.stringify(data));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const handleAddUser = (newUser) => {
    const userWithId = {
      id: Date.now(),
      ...newUser,
      address: { city: "New York", street: "5th Avenue" },
      company: { name: "Tech Startup", catchPhrase: "Innovation first" }
    };
    const updatedUsers = [userWithId, ...users];
    setUsers(updatedUsers);
    localStorage.setItem("appUsers", JSON.stringify(updatedUsers));
  };

  const filteredUsers = users
    .filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "asc") return a.name.localeCompare(b.name);
      return b.name.localeCompare(a.name);
    });

  return (
    // MAIN BACKGROUND GRADIENT
    <div className="min-h-screen bg-slate-50 relative overflow-hidden font-sans">
      {/* Decorative Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="max-w-6xl mx-auto px-4 py-10 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-2">
            User Directory
          </h1>
          <p className="text-gray-500 text-lg">Manage your team members efficiently.</p>
        </div>

        {/* SEARCH & FILTER BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="relative w-full md:w-1/2">
            <input
              type="text"
              placeholder="Search users..."
              className="w-full pl-12 pr-4 py-3 rounded-full border-none shadow-sm bg-white focus:ring-2 focus:ring-indigo-400 outline-none transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg className="w-6 h-6 text-gray-400 absolute left-4 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
          
          <button
            onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
            className="flex items-center gap-2 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-sm hover:shadow-md transition-all active:scale-95"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"></path></svg>
            Sort: {sortOrder === "asc" ? "A-Z" : "Z-A"}
          </button>
        </div>

        {/* FORM */}
        <AddUserForm onAddUser={handleAddUser} />

        {/* CONTENT GRID */}
        {loading && <div className="text-center py-20 text-indigo-500 animate-pulse text-xl">Loading ecosystem...</div>}
        {error && <div className="text-center py-20 text-red-500 bg-red-50 rounded-lg">Error: {error}</div>}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <UserCard
                  key={user.id}
                  user={user}
                  onClick={setSelectedUser}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-20">
                <p className="text-gray-400 text-xl">No users found matching "{searchTerm}"</p>
              </div>
            )}
          </div>
        )}

        {/* MODAL */}
        {selectedUser && (
          <UserModal
            user={selectedUser}
            onClose={() => setSelectedUser(null)}
          />
        )}
      </div>
    </div>
  );
}

export default App;