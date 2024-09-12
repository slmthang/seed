
'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import { getSession, Session } from '@auth0/nextjs-auth0';

export function ProfileClient() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div className={"w-full min-h-[calc(100vh-14rem)] flex flex-col items-center pt-5 bg-darker rounded-t-3xl"}>
        <img src={user.picture ? user.picture : ''} alt={user.name ? user.name : ''} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.org_id} fds</p>
      </div>
    )
  );
}




export default async function ProfileServer() {
  const { user } = await getSession();

  return (
      user && (
          <div>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
      )
  );
}