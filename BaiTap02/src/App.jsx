import { UserProvider } from './context/UserContext';
import UserList from './components/UserList';
import { motion } from 'framer-motion';

function App() {
  return (
    <UserProvider>
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-indigo-50 to-blue-100 py-12 px-4">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div 
            className="flex justify-center mb-8"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 20,
              delay: 0.2
            }}
          >
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
              User Directory
            </h1>
          </motion.div>
          <UserList />
          <motion.p 
            className="text-center text-gray-600 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Powered by JSONPlaceholder API
          </motion.p>
        </motion.div>
      </div>
    </UserProvider>
  );
}

export default App;