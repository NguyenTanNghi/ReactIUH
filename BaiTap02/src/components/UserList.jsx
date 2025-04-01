import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { motion, AnimatePresence } from "framer-motion";

const UserList = () => {
  const { users, loading, error } = useContext(UserContext);
  const [selectedUser, setSelectedUser] = useState(null);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  // Helper function to generate avatar placeholder based on user's name
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };

  // Generate random pastel color based on user ID for avatar background
  const getAvatarColor = (id) => {
    const colors = [
      "bg-pink-200 text-pink-800",
      "bg-purple-200 text-purple-800",
      "bg-indigo-200 text-indigo-800",
      "bg-blue-200 text-blue-800",
      "bg-teal-200 text-teal-800",
      "bg-green-200 text-green-800",
      "bg-yellow-200 text-yellow-800",
      "bg-orange-200 text-orange-800",
    ];
    return colors[id % colors.length];
  };

  return (
    <div className="p-8 bg-white rounded-xl shadow-xl">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-purple-800 mb-2">User Directory</h1>
        <p className="text-gray-600 mb-6">Search and view detailed user information</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative mb-8"
      >
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search users by name..."
          className="w-full pl-12 pr-4 py-4 border-2 border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-purple-50 text-lg"
          value={search}
          onChange={handleSearchChange}
        />
      </motion.div>

      {error && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="p-4 mb-6 bg-red-100 text-red-700 rounded-lg flex items-center"
        >
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {error}
        </motion.div>
      )}
      
      {loading ? (
        <div className="flex flex-col items-center justify-center py-16">
          <div className="w-20 h-20 relative">
            <div className="w-20 h-20 rounded-full border-4 border-purple-200"></div>
            <div className="w-20 h-20 rounded-full border-t-4 border-purple-600 animate-spin absolute top-0 left-0"></div>
          </div>
          <p className="mt-6 text-xl text-purple-600 font-medium">Loading users...</p>
        </div>
      ) : (
        <div>
          {filteredUsers.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 bg-purple-50 rounded-xl"
            >
              <svg className="mx-auto h-16 w-16 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="mt-4 text-xl text-gray-600">No users found. Try a different search.</p>
            </motion.div>
          )}

          <AnimatePresence>
            <div className="space-y-4">
              {currentUsers.map((user, index) => (
                <motion.div
                  key={user.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  className="p-5 bg-white rounded-xl shadow border-l-4 border-purple-500 cursor-pointer transition-all duration-300 flex items-center"
                  onClick={() => setSelectedUser(user)}
                >
                  
                  <img src={`./anh${user.id}.png`} alt=""  className={`object-cover w-30 h-30 rounded-full flex items-center justify-center text-xl font-bold mr-4 ${getAvatarColor(user.id)}`}/>
                  
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-purple-700">{user.name}</h2>
                    <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                      <p className="text-gray-600 flex items-center">
                        <svg className="w-4 h-4 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        {user.email}
                      </p>
                      <p className="text-gray-600 flex items-center">
                        <svg className="w-4 h-4 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {user.address.city}
                      </p>
                    </div>
                  </div>

                  <div className="ml-2">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
          
          {filteredUsers.length > 0 && (
            <motion.div 
              className="flex justify-center mt-8 space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <button
                className={`px-4 py-2 rounded-md ${currentPage === 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-purple-100 text-purple-700 hover:bg-purple-200'} transition-colors duration-300`}
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                &laquo; Prev
              </button>
              
              {Array.from({ length: Math.ceil(filteredUsers.length / usersPerPage) }).map((_, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                    currentPage === index + 1
                      ? "bg-purple-600 text-white"
                      : "bg-purple-100 text-purple-700 hover:bg-purple-200"
                  }`}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
              
              <button
                className={`px-4 py-2 rounded-md ${currentPage === Math.ceil(filteredUsers.length / usersPerPage) ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-purple-100 text-purple-700 hover:bg-purple-200'} transition-colors duration-300`}
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(filteredUsers.length / usersPerPage)))}
                disabled={currentPage === Math.ceil(filteredUsers.length / usersPerPage)}
              >
                Next &raquo;
              </button>
            </motion.div>
          )}
        </div>
      )}
      
      <AnimatePresence>
        {selectedUser && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedUser(null)}
          >
            <motion.div
              className="bg-white rounded-xl shadow-2xl max-w-xl w-full overflow-hidden"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4">
                  <button 
                    onClick={() => setSelectedUser(null)}
                    className="text-white opacity-70 hover:opacity-100 transition-opacity duration-300"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="flex items-center">
                  <div className="relative">
                    <div className={`w-24 h-24 rounded-full flex items-center justify-center text-3xl font-bold ${getAvatarColor(selectedUser.id)} border-4 border-white`}>
                      {getInitials(selectedUser.name)}
                    </div>
                    <img 
                      src={`../anh${selectedUser.id}.png`} 
                      alt={selectedUser.name}
                      className="absolute inset-0 w-24 h-24 rounded-full object-cover border-4 border-white"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="ml-6">
                    <h2 className="text-2xl font-bold">{selectedUser.name}</h2>
                    <p className="text-purple-200 mt-1">@{selectedUser.username}</p>
                    <div className="mt-2 inline-flex items-center bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                      <span className="h-2 w-2 bg-green-400 rounded-full mr-2"></span>
                      Active User
                    </div>
                  </div>
                </div>
                
                <div className="flex mt-6 -mx-2">
                  <div className="px-2">
                    <div className="bg-white bg-opacity-20 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold">{Math.floor(Math.random() * 100)}</div>
                      <div className="text-xs uppercase tracking-wide mt-1">Posts</div>
                    </div>
                  </div>
                  <div className="px-2">
                    <div className="bg-white bg-opacity-20 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold">{Math.floor(Math.random() * 1000)}</div>
                      <div className="text-xs uppercase tracking-wide mt-1">Followers</div>
                    </div>
                  </div>
                  <div className="px-2">
                    <div className="bg-white bg-opacity-20 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold">{Math.floor(Math.random() * 500)}</div>
                      <div className="text-xs uppercase tracking-wide mt-1">Following</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-gradient-to-b from-purple-50 to-white space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 mr-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-gray-800">{selectedUser.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 mr-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="text-gray-800">{selectedUser.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 mr-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Website</p>
                    <p className="text-gray-800">{selectedUser.website}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 mr-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Company</p>
                    <p className="text-gray-800">{selectedUser.company.name}</p>
                    <p className="text-sm text-gray-500 italic">"{selectedUser.company.catchPhrase}"</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 mr-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Address</p>
                    <p className="text-gray-800">
                      {selectedUser.address.street}, {selectedUser.address.suite}
                    </p>
                    <p className="text-gray-800">
                      {selectedUser.address.city}, {selectedUser.address.zipcode}
                    </p>
                  </div>
                </div>
              
                <div className="mt-8 flex justify-between">
                  <button
                    className="px-4 py-2 border border-purple-500 text-purple-500 rounded-md hover:bg-purple-50 transition-colors duration-300"
                    onClick={() => setSelectedUser(null)}
                  >
                    Close
                  </button>
                  
                  <button
                    className="px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-md hover:from-purple-700 hover:to-indigo-700 transition-colors duration-300 shadow-md"
                  >
                    Contact User
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UserList;