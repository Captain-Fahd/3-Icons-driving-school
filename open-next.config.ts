import { defineCloudflareConfig } from "@opennextjs/cloudflare";

const config = defineCloudflareConfig();

// Emotion's "workerd" export condition points at edge-light files that Next's
// file tracing never copies, so esbuild cannot resolve @emotion/* (Chakra UI).
config.cloudflare = { ...config.cloudflare, useWorkerdCondition: false };

export default config;
