import React from 'react'
import Page from '@/components/Page'

export default function VerifyRequest() {
  return (
    <Page title='Verify Sign In Request'>
      <div className='w-full'>
        <h1 className='font-semibold text-5xl'>
          Verify Request
        </h1>
        <p className='mt-4 text-lg'>
          Confirm your email to sign in to BioHack. Didn't find an email from us? Check your spam folder or double check if you typed in the correct email.
        </p>
      </div>
    </Page>
  )
}