import logo from './logo.svg';
import './App.css';
import MaxWidthWrapper from './components/MaxWidthWrapper';
import Navbar from './components/Navbar';
import Globe from './components/Globe';

export default function App() {
  return (
    <>
      <Navbar />
      <MaxWidthWrapper className='mb-12 mt-28 flex flex-col items-center justify-center text-center'>
        <div className='mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/90'>
          <p className='text-sm font-semibold text-gray-700'>
            AirRoute is now public!
          </p>
        </div>
        <h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl'>
          Check out your flight{' '}
          <span className='bg-gradient-to-r from-[#FD9248] via-[#FA1768] to-[#F001FF] bg-clip-text text-transparent'>route</span>{' '}
          in seconds.
        </h1>
        <p className='mt-5 max-w-prose text-zinc-300 sm:text-lg'>
          AirRoute allows you to find out the best possible route amidst all the traffic. Simply provide your starting point and destination to know your route.
        </p>

        <a
          className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-full px-8 mt-5"
          to='dashboard'>
          Get started
        </a>
      </MaxWidthWrapper>

      <div>
        <Globe />
      </div>

      {/* Feature section */}
      <div className='mx-auto mb-32 mt-32 max-w-5xl sm:mt-56'>
        <div className='mb-12 px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl sm:text-center'>
            <h2 className='mt-2 font-bold text-4xl text-gray-100 sm:text-5xl'>
              Start chatting in minutes
            </h2>
            <p className='mt-4 text-lg text-gray-300'>
              Chatting with your PDF files has never been easier than with DocWhisperer.
            </p>
          </div>
        </div>

        {/* steps */}
        <ol className='my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0'>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-sm font-medium text-blue-600'>
                Step 1
              </span>
              <span className='text-xl font-semibold'>
                Sign up for an account
              </span>
              <span className='mt-2 text-zinc-300'>
                Start with a free plan or Upgrade to our{' '}
                <a
                  to='pricing'
                  className='text-blue-700 underline underline-offset-2'>
                  pro plan
                </a>
                .
              </span>
            </div>
          </li>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-sm font-medium text-blue-600'>
                Step 2
              </span>
              <span className='text-xl font-semibold'>
                Upload your PDF file
              </span>
              <span className='mt-2 text-zinc-300'>
                We&apos;ll process your file and make it ready for a discussion.
              </span>
            </div>
          </li>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-sm font-medium text-blue-600'>
                Step 3
              </span>
              <span className='text-xl font-semibold'>
                Start asking questions
              </span>
              <span className='mt-2 text-zinc-300'>
                It&apos;s as easy as that. Try DocWhisperer today - it takes less than a minute.
              </span>
            </div>
          </li>
        </ol>

        <div className='mx-auto max-w-6xl px-6 lg:px-8'>
          <div className='mt-16 flow-root sm:mt-24'>
            <div className='-m-2 rounded-xl bg-gray-900/25 p-2 ring-1 ring-inset ring-gray-900/20 lg:-m-4 lg:rounded-2xl lg:p-4'>
              <img
                src='/file-upload-preview.png'
                alt='uploading preview'
                width={1419}
                height={732}
                quality={100}
                className='rounded-md bg-background p-2 shadow-2xl ring-1 ring-gray-900/10'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}