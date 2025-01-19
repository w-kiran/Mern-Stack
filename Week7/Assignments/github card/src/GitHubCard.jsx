import React, { useState, useEffect } from 'react';
import './GitHubCard.css';

const GitHubCard = ({ username }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
          throw new Error('User not found');
        }
        const data = await response.json();
        setUserData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, [username]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="github-card">
      <img src={userData.avatar_url} alt={`${userData.login} avatar`} className="avatar" />
      <h2>{userData.name || userData.login}</h2>
      <p>@{userData.login}</p>
      <p>{userData.bio}</p>
      <div className="stats">
        <div>
          <strong>Repos:</strong> {userData.public_repos}
        </div>
        <div>
          <strong>Followers:</strong> {userData.followers}
        </div>
        <div>
          <strong>Following:</strong> {userData.following}
        </div>
      </div>
      <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
        View Profile
      </a>
    </div>
  );
};

export default GitHubCard;
