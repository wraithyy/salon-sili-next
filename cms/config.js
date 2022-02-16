const config = {
  cms_manual_init: true,
  backend: {
    name: "github",
    repo: "wraithyy/salon-sili-next",
    branch: "main",
  },
  media_folder: "public/img",
  public_folder: "img",
  collections: [
    {
      name: "landing",
      label: "Hlavní strana",
      files: [
        {
          label: "Úvod",
          name: "hero",

          file: "content/landing/hero.md",
          fields: [
            {
              label: "Titulek",
              name: "title",
              widget: "string",
              required: false,
            },
            {
              label: "Popis",
              name: "description",
              widget: "markdown",
              required: false,
            },
            {
              label: "Obrázek",
              name: "image",
              widget: "image",
              required: false,
            },
          ],
        },
        {
          label: "Procedury",
          name: "info",
          file: "content/landing/info.md",
          fields: [
            {
              label: "Nadpis",
              name: "title",
              widget: "string",
              required: false,
            },
            {
              label: "Procedury",
              name: "procedures",
              widget: "list",
              required: false,
              fields: [
                {
                  label: "Titulek",
                  name: "title",
                  widget: "string",
                  required: false,
                },
                {
                  label: "Popis",
                  name: "description",
                  widget: "markdown",
                  required: false,
                },
                {
                  label: "Obrazek",
                  name: "image",
                  required: false,
                  widget: "image",
                },
              ],
            },
            {
              label: "Obrázek",
              name: "image",
              widget: "image",
              required: false,
            },
          ],
        },
        {
          label: "Cenik",
          name: "pricing",
          file: "content/landing/pricing.md",
          fields: [
            {
              label: "Nadpis",
              name: "title",
              widget: "string",
              required: false,
            },
            {
              label: "Ceny",
              name: "prices",
              widget: "list",
              required: false,

              fields: [
                {
                  label: "Procedura",
                  name: "name",
                  required: false,
                  widget: "string",
                },
                {
                  label: "Cena",
                  name: "price",
                  required: false,
                  widget: "string",
                },
                {
                  label: "Poznámka",
                  name: "note",
                  required: false,
                  widget: "string",
                },
              ],
            },
            {
              label: "Obrázek",
              name: "image",
              widget: "image",
              required: false,
            },
          ],
        },
        {
          label: "Kontakt",
          name: "contact",
          file: "content/landing/contact.md",
          fields: [
            {
              label: "Nadpis",
              name: "title",
              widget: "string",
              required: false,
            },
            {
              label: "Text",
              name: "description",
              widget: "markdown",
              required: false,
            },
            {
              label: "Adresa",
              name: "address",
              widget: "markdown",
              required: false,
            },
            {
              label: "Mapa",
              name: "map",
              widget: "map",
              required: false,
              type: "Point",
              default:
                '{"type":"Point","coordinates":[50.76928171157583, 15.058656068955951]}',
            },
            {
              label: "Obrázek",
              name: "image",
              required: false,
              widget: "image",
            },
          ],
        },
      ],
    },
  ],
};
export default config;
