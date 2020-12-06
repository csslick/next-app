import Layout from '../components/Layout'
import { useState, useEffect} from 'react';

function About() {
  const [user, setUser] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    fetchGitProfile();
  }, [])

  const fetchGitProfile = () => {
    fetch('https://api.github.com/users/csslick')
      .then(res => {
        const statusCode = res.status > 200 ? res.status : false;
        console.log(res.status)
        setStatus(statusCode);
        return res.json()
      })
      .then(data => {
        console.log(data)
        setUser(data);
      })
  }

  return (
    <Layout title="About">
      {/* <p>{JSON.stringify(user)}</p> */}
      {/* <img src="./about.jpg" alt="about" width="100%" /> */}
      <h2>{user.login}</h2>
      <img src={user.avatar_url} alt="me" height="200" />
      <p>{user.bio}</p>
    </Layout>
  )
}

export default About;