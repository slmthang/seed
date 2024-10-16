// 'use server'


// import { ProfileIcon, PersonIcon, HelpIcon, SettingIcon, LogoutIcon } from './Icons';

// import { useClerk } from '@clerk/nextjs'


// import { currentUser } from '@clerk/nextjs/server';

// export default async function SideNavBarOptions() {

//     // signout button
//     const { signOut } = useClerk();

//     const user = await currentUser();

//     return (
        
//         <div className="w-[50%] h-full bg-darkest flex flex-col pl-6 gap-y-4">
//             <div className="pt-6 mb-6">
//                 <ProfileIcon tailwindClass=' !size-11'/>
//                 <div>
//                     <p className="text-base">{user?.fullName}</p>
//                     <p className="text-base font-extralight">{user?.primaryEmailAddress?.emailAddress}</p>
//                 </div>
//             </div>
//             <ul className=" gap-y-4 flex flex-col">
//                 <li className="text-lg h-[3rem] flex items-center">
//                     <PersonIcon />
//                     <button className="ml-6 h-[1.5rem] ">Profile</button>
//                 </li>
//                 <li className="text-lg h-[3rem] flex items-center">
//                     <HelpIcon />
//                     <button className="ml-6 h-[1.5rem] ">Help</button>
//                 </li>
//                 <li className="text-lg h-[3rem] flex items-center ">
//                     <SettingIcon />
//                     <button className="ml-6 h-[1.5rem] ">Setting</button>
//                 </li>
//                 <li className="text-lg h-[3rem] flex items-center">
//                     <LogoutIcon />
//                     <button onClick={() => signOut({redirectUrl: '/'})} className="ml-6 h-[1.5rem] ">Logout</button>
//                 </li>
//             </ul>
//         </div>
//     )
// }