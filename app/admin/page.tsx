import {
  GoogleOneTap,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from '@clerk/nextjs';
import { Link } from 'lucide-react';
import React from 'react';

type Props = {};

const page = (props: Props) => {
  return (
    <div className='h-screen'>
      <UserButton />
    </div>
  );
};

export default page;
