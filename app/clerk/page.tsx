// app/clerk/page.tsx
"use client";

import { useAuth, useUser } from "@clerk/nextjs";

export default function ClerkPage() {
  const { isSignedIn } = useAuth();
  const { user } = useUser();

  if (!isSignedIn) {
    return <div>Please log in to view this page.</div>;
  }

  return (
    <div>
      <h1>Welcome, {user?.firstName} {user?.lastName}</h1>
      <p>Email: {user?.emailAddresses[0]?.emailAddress}</p>
      <p>Phone: {user?.phoneNumbers[0]?.phoneNumber}</p>
      <p>Username: {user?.username}</p>

      <h3>Additional User Info:</h3>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}
