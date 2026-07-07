function Profile() {

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="container">

      <h1>👤 My Profile</h1>

      <h3>Name: {user?.name}</h3>

      <h3>Email: {user?.email}</h3>

      <h3>Role: {user?.role}</h3>

    </div>
  );
}

export default Profile;