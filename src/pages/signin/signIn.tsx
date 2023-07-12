import React from 'react';
import AuthModal from '@/components/Modals/AuthModal/AuthModal';

export default async function Signin() {
  return (
    <div>
      <AuthModal show={true} />
    </div>
  );
}
