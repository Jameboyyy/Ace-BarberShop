import { Rule } from '@sanity/types'

export default {
    name: "servicesPage",
    title: "Services Page",
    type: "document",
    fields: [
        {
            name: "servicesTitle",
            title: "Services Title",
            type: "string",
        },
        {
            name: "servicesProfile",
            title: "Services Profile",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "serviceTitle",
                            title: "Service Title",
                            type: "string",
                            validation: (rule: Rule) => rule.required().min(2)
                        },
                        {
                            name: "serviceDesc",
                            title: "Service Desc",
                            type: "string",
                            validation: (rule: Rule) => rule.required().min(2).max(500)
                        },
                        {
                            name: "serviceCost",
                            title: "Service Cost",
                            type: "string",
                            validation: (rule: Rule) => rule.required
                        },
                    ],
                },
            ],
        },
    ],
};