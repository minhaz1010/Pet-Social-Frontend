import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return <div className='flex  min-h-screen justify-center items-center'>
    <SignIn appearance={{
      elements: {
        formButtonPrimary: 'bg-slate-600',
        formFieldLabel: "text-xl",
        formFieldInput: "text-xl",
        socialButtonsBlockButtonText: "text-lg",
        socialButtonsProviderIcon: "text-lg",
        footerActionText: "text-lg",
        footerActionLink: "text-lg",
        headerTitle: "text-lg",
        headerSubtitle: 'text-md'
      }
    }} />
  </div>
}