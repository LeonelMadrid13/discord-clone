import { auth } from "@clerk/nextjs";
import { db } from "@/lib/db";

export const currentProfile = async () => {
    const { userId }: { userId: string | null } = auth()
    if(!userId) return null;

    const profile = db.profile.findUnique({
        where:{
            userId
        }
    });

    return profile
}