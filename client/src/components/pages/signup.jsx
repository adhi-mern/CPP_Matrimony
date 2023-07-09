import React, { useState } from 'react';
import { app, auth, firestore } from '../../server/firebase';

const SignUp = () => {
  const [githubUsername, setGithubUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [programmingLanguage, setProgrammingLanguage] = useState('');
  const [accountCreated, setAccountCreated] = useState(false);
  const [error, setError] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await app.auth().createUserWithEmailAndPassword(email, password);

      // Save user data to Firebase Firestore
      const userData = {
        githubUsername,
        email,
        gender,
        programmingLanguage,
      };

      await app.firestore().collection('users').doc(userCredential.user.uid).set(userData);

      // User creation successful
      console.log('User created:', userCredential.user);
      console.log(error);
      setAccountCreated(true);
      setError(''); // Reset error message if there was one
    } catch (error) {
      // Handle error
      console.error('Error signing up:', error);
      setAccountCreated(false);
      setError('Error signing up. Please try again.'); // Set error message
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-l from-bgarvin-400">
      <div className="w-80 bg-white p-8 rounded-md">
        <h2 className="text-center text-2xl font-bold mb-6">Sign Up</h2>
        {accountCreated && <p className="text-green-500 mb-4">Account created successfully</p>}
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSignUp}>
          <input
            type="text"
            placeholder="GitHub Username"
            value={githubUsername}
            onChange={(e) => setGithubUsername(e.target.value)}
            className="w-full mb-4 p-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 p-2 border border-gray-300 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-4 p-2 border border-gray-300 rounded"
          />
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full mb-4 p-2 border border-gray-300 rounded"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <input
            type="text"
            placeholder="Programming Language"
            value={programmingLanguage}
            onChange={(e) => setProgrammingLanguage(e.target.value)}
            className="w-full mb-4 p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
