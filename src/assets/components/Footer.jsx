export default function Footer() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full h-auto bg-slate-200 flex">
        <div className="w-full h-auto flex flex-row lg:px-32 p-5">
          <div className="flex flex-col px-8 basis-1/2 text-xl font-bold text-gray-600 align-baseline">
            <div className="flex">For better experience,download </div>
            <div className="flex">the Ai ModelHub app now</div>
          </div>
          <div className="flex basis-1/4 px-8">
            <a href="#">
              <img
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"
                alt="Download Play Store App"
              />
            </a>
          </div>
          <div className="flex basis-1/4 px-8">
            <a href="#">
              <img
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"
                alt="Download iOS App"
              />
            </a>
          </div>
        </div>
      </div>
      {/* footer navbar starts here */}
      <div className="w-full h-auto bg-black text-slate-300 pb-16">
        <div className="flex w-full h-auto lg:px-32 gap py-16">
          <div className="flex w-full flex-col base-1/4">
            <div className="flex text-xl text-white font-bold my-2">
              Ai ModelHub
            </div>
            <div className="flex  my-1">©2024 Ai ModelHub Technologies</div>
          </div>
          <div className="flex w-full flex-col base-1/4">
            <div className="flex text-xl text-white font-bold my-2">
              Company
            </div>
            <div className="flex my-1">About</div>
            <div className="flex my-1">Careers</div>
            <div className="flex my-1">Team</div>
            <div className="flex my-1">Foodie One</div>
            <div className="flex my-1">Foodie Instamart</div>
            <div className="flex my-1">Foodie Genie</div>
          </div>
          <div className="flex w-full flex-col base-1/4">
            <div className="flex text-xl text-white font-bold my-2">
              Contact us
            </div>
            <div className="flex my-1">Help & Support</div>
            <div className="flex my-1">Partner with us</div>
            <div className="flex my-1 mb-12">Ride with us</div>
            <div className="flex text-xl text-white font-bold my-2">Legal</div>
            <div className="flex my-1">Terms & Conditions</div>
            <div className="flex my-1">Cookie Policy</div>
            <div className="flex my-1">Privacy Policy</div>
          </div>
        </div>
      </div>
    </div>
  );
}
