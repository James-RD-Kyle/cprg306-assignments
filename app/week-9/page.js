"use client";

import { useUserAuth } from "../contexts/AuthContext";
import Link from 'next/link';

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    

    if (!user) {
        return (
            <div className="grid place-items-center h-screen">
                <h1>Please sign in</h1>
                <button type="button" onClick={gitHubSignIn}>Sign in with GitHub</button>
            </div>
        );
    }
    if (user) {
        return (
            <div>
                <h1>Welcome, {user.displayName}</h1>
                <button type="button"><Link href="/week-9/shopping-list">Shopping List</Link></button>
                <button type="button" onClick={firebaseSignOut}>Sign Out</button>
            </div>
        );
    }
};