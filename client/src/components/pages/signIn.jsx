import React, { useState } from 'react';
import { app } from '../../server/firebase';

const SignIn = () => {
  const [githubUsername, setGithubUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await app.auth().signInWithEmailAndPassword(githubUsername, password);
      console.log('User signed in:', userCredential.user);
      // Handle successful sign-in, e.g., redirect to a different page
    } catch (error) {
      // Handle error
      console.error('Error signing in:', error);
      if (error.code === 'auth/user-not-found') {
        setErrorMessage('No user found');
      } else {
        setErrorMessage('Error signing in');
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-l from-bgarvin-400">
      <div className="w-80 bg-white p-8 rounded-md">
        <h2 className="text-center text-2xl font-bold mb-6">Sign In</h2>
        <form onSubmit={handleSignIn}>
          <input
            type="text"
            placeholder="GitHub Username"
            value={githubUsername}
            onChange={(e) => setGithubUsername(e.target.value)}
            className="w-full mb-4 p-2 border border-gray-300 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-4 p-2 border border-gray-300 rounded"
          />
          {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
