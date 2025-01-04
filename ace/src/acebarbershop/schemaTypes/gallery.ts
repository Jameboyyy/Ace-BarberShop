import { Rule } from '@sanity/types';

export default {
    name: "gallerypage",
    title: "Gallery Page",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Page Title",
            type: "string",
        },
        {
            name: "galleryImages",
            title: "Gallery Images",
            type: "array",
            of: [
                {
                    type: "image",
                    fields: [
                        {
                            name: "orientation",
                            title: "Orientation",
                            type: "string",
                            options: {
                                list: [
                                    { title: "Portrait", value: "portrait" },
                                    { title: "Landscape", value: "landscape" },
                                ],
                                layout: "radio",
                            },
                            validation: (rule: Rule) =>
                                rule.required().error("Please specify the orientation."),
                        },
                    ],
                    options: {
                        hotspot: true, // Allows better cropping control
                    },
                },
            ],
            options: {
                layout: "grid",
            },
            validation: (rule: Rule) =>
                rule.required().min(1).error("Add at least one image to the gallery."),
        },
    ],
};
