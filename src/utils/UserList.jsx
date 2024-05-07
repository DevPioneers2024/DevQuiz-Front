export const UserList = ({ users }) => (
  <ul>
    {users.map(user => (
      <li key={user}>{user}</li>
    ))}
  </ul>
)
