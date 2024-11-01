import { useEffect, useState } from 'react';

// Higer-Order Component
// 게시글 상세보기나 redux사용할 때 쓴다.
export default function withUser(Component) {
  return function WrappedComponent({ userId, ...props }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      async function fetchUser() {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const userData = await response.json();
        setUser(userData);
        setLoading(false);
      }

      fetchUser();
    }, [userId]);

    if (loading) {
      return <p>Loading user...</p>;
    }

    return <Component user={user} {...props} />;
  };
}
