import { useState , useEffect , useCallback } from "react";

function UserProfile({ userId }) {
const [user, setUser] = useState(null);

const fetchUser = useCallback(async () => {
const res = await fetch(`/api/users/${userId}`);
setUser(await res.json());
setUser(data);
},[userId]);

useEffect(() => {
fetchUser();
}, [fetchUser]); 

return <div>{user?.name}</div>;
}

export default UserProfile;