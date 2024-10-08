


export default async function Page() {
  
  const user = await getUserById('user_2mwvlMQ4bgUgq5dDkQG6hFLIYGk').then(data => data[0]);

  return (
    <div className='w-screen h-[40rem] rounded-xl bg-dark'>
      <h1>{user.firstName + ' ' + user.lastName}</h1>
    </div>
    
  );
}