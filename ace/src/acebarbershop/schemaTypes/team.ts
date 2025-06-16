import { Rule } from "@sanity/types";
export default {
  name: "teampage",
  title: "Team Page",
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
      name: "teamLandscapePicture",
      title: "Team Landscape Picture",
      type: "array",
      of: [{ type: "image" }],
      options: {
        layout: "grid",
      },
    },
    {
      name: "barberProfiles",
      title: "Barber Profiles",
      type: "array",
      of: [
        {
          type: "object", 
          name: "barberProfile",
          title: "Barber Profile",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
              validation: (rule: Rule) => rule.required().min(2).max(25) 
            },
            {
              name: "barberPhoto",
              title: "Barber Photo",
              type: "image",
              options: {
                hotspot: true,
              },
              validation: (rule: Rule) => rule.required().error('A Photo is Mandatory') 
            },
            {
              name: "bio",
              title: "About The Barber",
              type: "text",
              validation: (rule: Rule) => rule.required().min(2).max(25)
            },
            {
              name: "sortOrder",
              title: "Sort Order",
              type: "number",
              validation: (rule: Rule) => rule.required().min(1).max(15)
            },
          ],
        },
      ],
    },
  ],
};
