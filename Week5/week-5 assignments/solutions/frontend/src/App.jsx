import React, { useState } from 'react';

export function App() {
  // State variables to store data and form input
  const [userData, setUserData] = useState({
    name: '',
    description: '',
    interests: [],
    linkedin: '',
    twitter: '',
    otherSocialMedia: { url: '' },
    profilePicture: '',
  });

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    interests: '',
    linkedin: '',
    twitter: '',
    otherSocialMediaUrl: '',
    profilePicture: '',
  });

  // Handle form field changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const data = {
      name: formData.name,
      description: formData.description,
      interests: formData.interests.split(',').map(interest => interest.trim()),
      linkedin: formData.linkedin,
      twitter: formData.twitter,
      otherSocialMedia: { url: formData.otherSocialMediaUrl },
      profilePicture: formData.profilePicture,
    };

    try {
      const response = await fetch('http://localhost:5000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Success:', result);
      // Optionally, handle the result or update the UI here
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <div style={styles.card}>
        {userData.profilePicture && (
          <img
            src={userData.profilePicture}
            alt={`${userData.name}'s profile`}
            style={styles.profilePicture}
          />
        )}
        <h2 style={styles.name}>{userData.name}</h2>
        <p style={styles.description}>{userData.description}</p>
        <h3 style={styles.interestsHeader}>Interests</h3>
        <ul style={styles.interestsList}>
          {userData.interests.length > 0 ? (
            userData.interests.map((interest) => (
              <li key={interest} style={styles.interestItem}>
                {interest}
              </li>
            ))
          ) : (
            <li style={styles.interestItem}>No interests listed</li>
          )}
        </ul>
        <div style={styles.socialLinks}>
          {userData.linkedin && (
            <a
              href={userData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...styles.link, marginLeft: '0px' }}
            >
              LinkedIn
            </a>
          )}
          <br />
          {userData.twitter && (
            <a
              href={userData.twitter}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              Twitter
            </a>
          )}
          {userData.otherSocialMedia.url && (
            <a
              href={userData.otherSocialMedia.url}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              Other Social Media
            </a>
          )}
        </div>
      </div>

      <form onSubmit={handleSubmit} style={styles.form}>
        <h3>Update Your Information</h3>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
          />
        </label>
        <br />
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            style={styles.input}
          />
        </label>
        <br />
        <label>
          Interests (comma-separated):
          <input
            type="text"
            name="interests"
            value={formData.interests}
            onChange={handleChange}
            style={styles.input}
          />
        </label>
        <br />
        <label>
          LinkedIn:
          <input
            type="text"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            style={styles.input}
          />
        </label>
        <br />
        <label>
          Twitter:
          <input
            type="text"
            name="twitter"
            value={formData.twitter}
            onChange={handleChange}
            style={styles.input}
          />
        </label>
        <br />
        <label>
          Other Social Media URL:
          <input
            type="text"
            name="otherSocialMediaUrl"
            value={formData.otherSocialMediaUrl}
            onChange={handleChange}
            style={styles.input}
          />
        </label>
        <br />
        <label>
          Profile Picture URL:
          <input
            type="text"
            name="profilePicture"
            value={formData.profilePicture}
            onChange={handleChange}
            style={styles.input}
          />
        </label>
        <br />
        <button type="submit" style={styles.submitButton}>Update Card</button>
      </form>
    </div>
  );
}

// Styles
const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    margin: '20px',
    maxWidth: '400px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f8f9fa',
    textAlign: 'center',
  },
  profilePicture: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '15px',
  },
  name: {
    fontSize: '24px',
    marginBottom: '10px',
    color: '#333',
  },
  description: {
    fontSize: '16px',
    color: '#555',
    marginBottom: '15px',
  },
  socialLinks: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '15px',
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
    padding: '10px 15px',
    borderRadius: '5px',
    backgroundColor: '#007BFF',
    display: 'inline-block',
    margin: '5px 0',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  interestsHeader: {
    fontSize: '18px',
    marginBottom: '10px',
    color: '#333',
  },
  interestsList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  interestItem: {
    fontSize: '14px',
    marginBottom: '5px',
    color: '#555',
  },
  form: {
    maxWidth: '400px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f8f9fa',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
  },
  submitButton: {
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#007BFF',
    color: '#fff',
    cursor: 'pointer',
  },
};

export default App;
