import { Rule } from "@sanity/types";
export default {

    name: "homePage",
    title: "Homepage",
    type: "document",
    fields: [
        {
            name: "bookingLink",
            title: "Booking Link",
            type: "url",
            validation: (Rule: Rule) => 
                Rule.uri({ scheme: ["http", "https"] }).required().error("A valid booking URL is required"),
        },
        {
            name: "landscapeTitle",
            title: "Landscape Title",
            type: "string",
        },
        {
            name: "landscapeVideo",
            title: "Landscape Video",
            type: "file",
            options: {
                accept: "video/mp4, video/quicktime, video/webm",
            },
        },
        {
            name: "missionStatement",
            title: "Mission Statement",
            type: "string",
        },
    ],
}