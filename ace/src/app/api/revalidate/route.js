import { revalidatePath, revalidateTag } from "next/cache";

export async function POST(req) {
    try {
        const secret = req.nextUrl.searchParams.get("secret");
        if (secret !== process.env.REVALIDATE_SECRET) {
            return new Response("Unauthorized", { status: 401 });
        }

        console.log("🔄 Revalidating all pages...");

        // 🔥 Revalidate all paths that depend on Sanity data
        revalidatePath("/");
        revalidatePath("/team");
        revalidatePath("/gallery");
        revalidateTag("sanity-data");

        return new Response("Success! All pages updated.", { status: 200 });
    } catch (error) {
        console.error("Revalidation error:", error);
        return new Response("Error", { status: 500 });
    }
}
