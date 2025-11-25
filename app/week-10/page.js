"use client";

import { useUserAuth } from "../contexts/AuthContext";
import Link from 'next/link';

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();


    if (!user) {
        return (
            <div className="flex justify-center items-center flex-col bg-slate-900 gap-4 h-screen">
                <div className="bg-indigo-900 p-8 rounded text-center">
                    <h1>Please sign in</h1>
                    <button type="button" className="bg-blue-500 rounded py-1 px-2" onClick={gitHubSignIn}>Sign in with GitHub</button>
                </div>
            </div>
        );
    }
    return (
        <div className="flex justify-center items-center flex-col bg-slate-900 gap-4 h-screen">
            <div className="bg-indigo-900 p-8 rounded text-center">
                <h1>Welcome, {user.displayName}</h1>
                <div className="flex gap-8">
                    <button type="button" className="bg-green-500 rounded py-1 px-2" ><Link href="/week-10/shopping-list">Shopping List</Link></button>
                    <button type="button" className="bg-red-500 rounded py-1 px-2" onClick={firebaseSignOut}>Sign Out</button>
                </div>
            </div>
        </div>
    );
};