import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { NEXT_PUBLIC_SANITY_TOKEN } from "./credentials";

export const client = sanityClient({
  projectId: "y1nz59ia",
  dataset: "production",
  apiVersion: "2022-03-10",
  useCdn: true,
  token: NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
