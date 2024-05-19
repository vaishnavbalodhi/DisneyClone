const Login = () => {
  return (
    <div className="w-full min-h-screen">
        <section className="flex overflow-hidden flex-col items-center">
            <div className="relative w-full min-h-screen flex flex-col justify-center items-center p-10 bg-[url('./images/login-background.jpg')] -z-1 bg-cover">
                <div className="w-full p-10 max-w-[650px] absolute object-cover flex flex-col justify-center items-center transition ease-in-out transition-opacity-20">
                    <img className="mb-4 w-full max-w-[600px]" src="\images\cta-logo-one.svg" alt="hello" />
                    <button className="w-full bg-[#0063e5] text-[#f9f9f9] uppercase text-xl tracking-wider py-3 px-2 font-bold rounded-md hover:bg-[#0483ee]">
                        Get all here
                    </button>
                    <div className="mt-5">
                        <p className="text-center text-sm tracking-wider text-zinc-50 font-['Poppins']">Disney+ offers a magical streaming experience with unlimited access to Disney, Pixar, Marvel, Star Wars, and National Geographic content. Choose plans for endless entertainment with options for ad-free streaming</p>
                    </div>
                    <img className="mt-7" src="\images\cta-logo-two.png" alt="" />
                </div>
            </div>
        </section>
    </div>
  )
}

export default Login