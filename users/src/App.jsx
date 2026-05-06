import {useState, useEffect} from 'react';

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('https://api.freeapi.app/api/v1/public/randomusers');
        const data = await response.json();
        setUser(data.data.data);
      }
      catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUser();
  }, []);
  return(
    <div>
      {user.map((person) => (
        <div key={person.id} className="user-card">
          <img src={person.picture.large} alt={`${person.name.first} ${person.name.last}`} onError={(e) => { e.target.src = 'https://picsum.photos/200'; }} />
          <h3>{person.name.first} {person.name.last}</h3>
          <p>Email: {person.email}</p>
          <p>Phone: {person.phone}</p>
          <p>Location: {person.location.city}, {person.location.country}</p>
          <p>Age: {person.dob.age}</p>
          <p>Gender: {person.gender}</p>

        </div>
      ))}

    </div>
  )

}
export default App; 