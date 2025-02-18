export default {

    name: "homePage",
    title: "Homepage",
    type: "document",
    fields: [
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