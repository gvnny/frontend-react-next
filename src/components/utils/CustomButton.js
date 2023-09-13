const CustomButton = ({user}) => {
  return (
    <>
      <button>{user?.name}</button>
      <p>Test: {user?.email}</p>
      <p>Test: {user?.avatar}</p>
    </>

  )
}

export default CustomButton