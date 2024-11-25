// import GoogleCaptchaWrapper from '@/components/GoogleCaptchaWrapper';
import { Toaster } from 'react-hot-toast';
import { ClerkProvider } from '@clerk/nextjs';

export default function Adminlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <Toaster />
      {children}
    </ClerkProvider>
  );
}
