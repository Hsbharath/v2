//import Main from '../components/Main/page'; // Importing the Main component
import V4Main from '@/components/V4Main/V4Main';

// Default export of the Home component, responsible for rendering the main content of the home page
export default function Home() {
  return (
    <main className='main relative w-screen min-h-[100vh]'>
      {/* Background elements for visual effect */}
      {/* <div
        className='fixed top-0 left-0 w-screen h-[100vh] flex items-center justify-center overflow-hidden
        before:absolute
        before:top-1/2
        before:left-1/2
        before:-translate-x-1/2
        before:-translate-y-1/2
        before:w-[1000px]
        before:h-[1000px]
        before:bg-blue-600/20
        before:blur-3xl
        before:rounded-full
        before:-skew-x-12
        before:dark:bg-sky-600/20
        after:absolute
        after:top-1/2
        after:left-1/2
        after:-translate-x-1/2
        after:-translate-y-1/2
        after:w-[600px]
        after:h-[600px]
        after:bg-sky-600/20
        after:blur-3xl
        after:rounded-full
        after:-skew-x-12
        after:border-2
        after:dark:bg-blue-600/20'
      ></div> */}
      {/* Rendering the Main component */}
      {/* <Main /> */}
      <V4Main />
    </main>
  );
}
